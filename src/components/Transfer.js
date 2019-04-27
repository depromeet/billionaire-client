import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Transfer.scss';

class Transfer extends Component {
  render() {
    return (
      <div className="transfer">
        송금 페이지
        <Link to="/dashboard">대시보드로</Link>
        <Link to="/account">예금 페이지로</Link>
        <Link to="/product">주식 페이지로</Link>
        <Link to="/ranking">랭킹 페이지로</Link>
      </div>
    );
  }
}

export default Transfer;