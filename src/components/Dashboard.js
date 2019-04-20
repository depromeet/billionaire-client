import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        { 
          this.props.data && 
          this.props.data.name 
        }
        님의 대시보드
        { 
          this.props.data && 
          <img src={this.props.data.profileImageUrl} alt="Profile" width="200" />
        }
        <Link to="/account">예금 페이지로</Link>
        <Link to="/product">주식 페이지로</Link>
        <Link to="/ranking">랭킹 페이지로</Link>
        <Link to="/transfer">송금 페이지로</Link>
      </div>
    );
  }
}

export default Dashboard;
