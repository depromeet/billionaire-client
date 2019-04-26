import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { KakaoAppKey } from 'config';
import 'styles/Login.scss';

class Login extends Component {
  componentDidMount() {
    window.Kakao.init(KakaoAppKey);
  }

  login = () => {
    this.props.kakaoAuthorizeRequest();
  }

  render() {
    return (
      <div className="login">
        <img className="login-logo" src="assets/login/logo_login_@3x.png"/>
        <img className="login-bg-wave" src="/assets/login/wave_login_@3x.png"/>
        <img className="login-bg-planet" src="assets/login/smallplanet_login_@3x.png"/>
        <img className="login-bg-star" src="assets/login/dot_login_@3x.png"/>
        <img className="login-bg-planet1" />
        <img className="login-bg-meteor" />
        <img className="login-bg-human" />
        <button onClick={this.login} className="btn login-kakao"><img className="icon-kakao" src="/assets/icon.svg"/>카카오 계정으로 로그인</button>
        {
          this.props.auth.status === 'SUCCESS' &&
          <Redirect to="/dashboard" />
        }
      </div>
    );
  }
}

export default Login;
