import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Deposit.scss';

class Deposit extends Component {
  render() {
    return (
      <div className="deposit">
        예금 페이지
        <Link to="/stock">주식 페이지로</Link>
        <Link to="/ranking">랭킹 페이지로</Link>
        <Link to="/transfer">송금 페이지로</Link>
      </div>
    );
  }
}

export default Deposit;
