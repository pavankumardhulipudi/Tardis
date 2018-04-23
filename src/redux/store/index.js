/**
 * @flow
 */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [
  thunk,
];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
