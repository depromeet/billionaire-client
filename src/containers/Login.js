import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        로그인 페이지
        <Link to="/deposit">로그인 (예금 페이지로)</Link>
      </div>
    );
  }
}

export default Login;
