/**
 * @flow
 */

import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from '../reducers/auth';
import keyFob from '../reducers/keyFob';
import manual from '../reducers/manual';

const rootReducer = combineReducers({
  auth,
  keyFob,
  manual,
});

export default rootReducer;
