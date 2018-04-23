/**
 * @flow
 */

import { connect } from 'react-redux';
import KeyFob from './keyfob';
import { toggleKeyFob, getKeyFobStatus } from '../../redux/actions/keyFob';

export default connect(
  state => ({
    keyFob: state.keyFob,
    keyFobFailed: state.keyFobFailed,
  }),
  dispatch => ({
    toggleKeyFob: type => dispatch(toggleKeyFob(type)),
    getKeyFobStatus: type => dispatch(getKeyFobStatus(type)),
  }),
)(KeyFob);
