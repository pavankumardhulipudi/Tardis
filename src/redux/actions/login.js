import { API_URL, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../constants';
import JWT from '../../utils/jwt';

const base64url = (source) => {
  encodedSource = CryptoJS.enc.Base64.stringify(source);
  return encodedSource;
};

export const login = (client_id, username, password) => (dispatch) => {
  const token = JWT.createJWT({ client_id, username, password });

  dispatch({ type: LOGIN_PENDING });

  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    },
    body: token,
  })
    .then((response) => {
      if (response.status === 200) {
        response.text().then((data) => {
          dispatch({ type: LOGIN_SUCCESS, token });
          return false;
        }).catch((err) => {
          dispatch({ type: LOGIN_FAILED });
        });
      } else {
        dispatch({ type: LOGIN_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILED });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
