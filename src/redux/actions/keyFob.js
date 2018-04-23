import { API_URL, ACCESS_TOKEN, KEY_FOB_PENDING, KEY_FOB_SUCCESS, KEY_FOB_STATUS, KEY_FOB_FAILED } from '../constants';

export const toggleKeyFob = type => (dispatch) => {
  dispatch({ type: KEY_FOB_PENDING });

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ACCESS_TOKEN,
  };

  const body = JSON.stringify({ type });

  fetch(`${API_URL}/keyfob`, {
    method: 'POST',
    headers,
    body,
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: KEY_FOB_SUCCESS });
    } else {
      dispatch({ type: KEY_FOB_FAILED });
    }
  }).catch((err) => {
    dispatch({ type: KEY_FOB_FAILED });
  });
};

export const getKeyFobStatus = status => (dispatch) => {
  const headers = {
    Authorization: ACCESS_TOKEN,
  };
  fetch(`${API_URL}/keyfob?type=${status}`, {
    method: 'GET',
    headers,
  })
    .then((response) => {
      if (response.status == 200) {
        response.text().then((res) => {
          res = JSON.parse(res);
          if (res.status === 'complete') {
            dispatch({ type: KEY_FOB_STATUS, status });
          }
        });
      }
    }).catch((err) => {
      console.log('Error in getKeyFobStatus', err);
    });
};
