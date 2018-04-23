import { LOCK, UNLOCK, KEY_FOB_PENDING, KEY_FOB_SUCCESS, KEY_FOB_STATUS, KEY_FOB_FAILED } from '../constants';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  status: LOCK,
};

export default function reducer(state = initialState, action = null) {
  switch (action.type) {
    case KEY_FOB_PENDING: 8;
      return Object.assign({}, state, {
        isFetching: true,
      });
    case KEY_FOB_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
      });
    case KEY_FOB_STATUS:
      return Object.assign({}, state, {
        isFetching: false,
        status: action.status,
      });
    case KEY_FOB_FAILED:
      return Object.assign({}, state, {
        isError: true,
      });
    default:
      return state;
  }
}
