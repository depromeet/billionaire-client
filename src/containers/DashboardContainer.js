import { connect } from 'react-redux';
import * as actions from 'actions/auth';
import { Dashboard } from 'components';

const mapStateToProps = (state) => (
  state.authReducer.me
);

const mapDispatchToProps = (dispatch) => ({
  getMeRequest: () => dispatch(actions.getMeRequest()),
});

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;