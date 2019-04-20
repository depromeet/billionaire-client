import App from 'components/App';
import * as actions from 'actions/auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
  state.authReducer
);

const mapDispatchToProps = (dispatch) => ({
  getMeRequest: () => dispatch(actions.getMeRequest()),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;