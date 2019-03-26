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
        로그인 페이지
        <button onClick={this.login}>로그인 (예금 페이지로)</button>
        {
          this.props.auth.status === 'SUCCESS' &&
          <Redirect to="/deposit" />
        }
      </div>
    );
  }
}

export default Login;
