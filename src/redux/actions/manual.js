import { API_URL, MANUAL_PENDING, MANUAL_SUCCESS, MANUAL_FAILED } from '../constants';

export const getManual = () => async (dispatch) => {
  dispatch({ type: MANUAL_PENDING });
  try {
    const response = await fetch(`${API_URL}/manual/index.json`);
    const data = await response.json();
    dispatch({ type: MANUAL_SUCCESS, data });
  } catch (e) {
    dispatch({ type: MANUAL_FAILED });
  }
};
