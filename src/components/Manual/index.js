/**
 * @flow
 */

import { connect } from 'react-redux';
import Manual from './manual';
import { getManual } from '../../redux/actions/manual';

export default connect(
  state => ({
    manual: state.manual,
  }),
  dispatch => ({
    getManual: () => dispatch(getManual()),
  }),
)(Manual);
