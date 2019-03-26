import App from 'components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
  state.loginReducer
);

const mapDispatchToProps = () => ({});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;