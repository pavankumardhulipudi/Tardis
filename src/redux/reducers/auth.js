import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../constants';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  token: null,
};

export default function reducer(state = initialState, action = null) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, initialState, {
        isFetching: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, initialState, {
        isSuccess: true,
        token: action.token,
      });
    case LOGIN_FAILED:
      return Object.assign({}, initialState, {
        isError: true,
      });
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
