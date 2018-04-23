/**
 * @flow
 */

import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../redux/actions/login';
import { CLIENT_ID } from '../../redux/constants';

export default connect(
  state => ({
    auth: state.auth,
  }),
  dispatch => ({
    login: (username, password) => dispatch(login(CLIENT_ID, username, password)),
  }),
)(Login);
