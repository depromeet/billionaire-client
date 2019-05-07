import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { KakaoAppKey } from 'config';

class Login extends Component {
  state = {
    isLoginClicked: false,
  }
  componentDidMount() {
    window.Kakao.init(KakaoAppKey);
  }

  login = () => {
    this.setState(() => ({
      isLoginClicked: true
    }))
    this.props.kakaoAuthorizeRequest();
  }

  render() {
    return (
      <div className="login">
        <img className="login-logo" alt="디프가즈아 서비스 로고" src="assets/login/logo_login_@3x.png"/>
        <img className="login-bg-wave" alt="푸른 은하수가 좌측 상단에서 우측 하단으로 흐름 " src="/assets/login/wave_login_@3x.png"/>
        <img className="login-bg-planet" alt="은하수 위에 행성이 떠있음" src="assets/login/smallplanet_login_@3x.png"/>
        <img className="login-bg-star" alt="배경은 별들로 반짝이고 있음" src="assets/login/dot_login_@3x.png"/>
        <img className="login-bg-meteor" alt="배경에 별똥별이 떨어지고 있음" src="assets/login/animation/star@3x.gif"/>
        <img className="login-bg-planet1" alt="우측 상단에 큰 행성이 있음" src="assets/login/bigplanet_login_@3x.png"/>
        <img className="login-bg-human" alt="화면 중앙에 우주비행사가 돈과 노트북과 함께 반짝거리며 둥둥 떠있음" src="assets/login/animation/person@3x.gif"/>
        {
          this.state.isLoginClicked ?
          <button
            className="btn login-kakao"
          >
            <img className="icon-kakao" alt="카카오 계정으로 로그인" src="/assets/icon.svg"/>
            카카오 계정으로 로그인
          </button> 
          :
          <button
            onClick={this.login}
            className="btn login-kakao"
          >
            <img className="icon-kakao" alt="카카오 계정으로 로그인" src="/assets/icon.svg"/>
            카카오 계정으로 로그인
          </button>
        }
        {
          this.props.auth.status === 'SUCCESS' &&
          <Redirect to="/ranking" />
        }
      </div>
    );
  }
}

export default Login;
