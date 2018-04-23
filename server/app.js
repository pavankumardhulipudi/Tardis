const express = require('express');

const app = express();
const jwt = require('jsonwebtoken');
const path = require('path');

// Express configuration

app.use(express.json());
app.use('/manual', express.static(path.join(__dirname, 'manual')));

// Authorization

function authorization(req, res, next) {
  if (req.get('Authorization') !== 'access_token') {
    console.log('missing Authorization header');
    res.sendStatus(401).end();
    next(Error('Not authorized'));
    return;
  }

  next();
}

app.use(['/keyfob'], authorization);


// Login

app.use('/login', (req, res, next) => {
  req.rawBody = '';
  req.on('data', (chunk) => {
    req.rawBody += chunk;
  });

  req.on('end', () => {
    jwt.verify(req.rawBody, 'client_secret', (err, decoded) => {
      err && console.log(err);
      req.body = decoded;
      next();
    });
  });
});

app.post('/login', (req, res) => {
  console.log('POST /login received: ', req.body);

  if (req.body.client_id !== 'client_id'
    || req.body.username !== 'username'
    || req.body.password !== 'password') {
    console.log('POST /login invalid credentials');
    res.sendStatus(401);
    return;
  }

  const token = jwt.sign({ access_token: 'access_token' }, 'client_secret');
  setTimeout(() => {
    res.set('Content-Type', 'text/plain');
    res.send(token);
  }, 2000);
});

// KeyFob

app.post('/keyfob', (req, res) => {
  console.log('POST /keyfob received: ', req.body);
  if (req.body.type !== 'LOCK' && req.body.type !== 'UNLOCK') {
    console.log('POST /keyfob type not found');
    res.sendStatus(404);
    return;
  }
  res.sendStatus(200);
});

app.get('/keyfob', (req, res) => {
  console.log('GET /keyfob query: ', req.query);
  if (req.query.type !== 'LOCK' && req.query.type !== 'UNLOCK') {
    console.log('GET /keyfob type not found');
    res.sendStatus(404);
    return;
  }

  setTimeout(() => {
    res.set('Content-Type', 'application/json');
    res.send({ status: (Math.random() * 100 < 70) ? 'in_progress' : 'complete' });
  }, 2000);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
