import { Login } from 'components';
import * as actions from 'actions/auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
  state.authReducer
);

const mapDispatchToProps = (dispatch) => ({
  kakaoAuthorizeRequest: () => {
    dispatch(actions.kakaoAuthorizeRequest()).then(() => {
      dispatch(actions.authRequest());
    })
  },
  authRequest: () => dispatch(actions.authRequest()),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;