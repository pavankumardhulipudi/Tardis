import { MANUAL_PENDING, MANUAL_SUCCESS, MANUAL_FAILED } from '../constants';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  data: null,
};

export default function reducer(state = initialState, action = null) {
  switch (action.type) {
    case MANUAL_PENDING:
      return Object.assign({}, initialState, {
        isFetching: true,
      });
    case MANUAL_SUCCESS:
      return Object.assign({}, initialState, {
        isSuccess: true,
        data: action.data,
      });
    case MANUAL_FAILED:
      return Object.assign({}, initialState, {
        isError: true,
      });
    default:
      return state;
  }
}
