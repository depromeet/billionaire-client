import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {
          this.props.close ?
            <div className="icon-previous" onClick={this.props.close}><span className="hidden">뒤로가기</span></div>
          : this.props.goBack ?
            <div className="icon-previous" onClick={this.props.goBack}><span className="hidden">뒤로가기</span></div>
          : 
          <Link to="/ranking">
            <div className="header-logo">
              <span className="hidden">디프만 로고</span>
            </div>
          </Link>
        }
        <Link to="/product">
          <button type="button" className="header-product btn-menu">
            <img src="/assets/icon-graph.svg" alt="상품 페이지로 가기"/>
          </button>
        </Link>
        <Link to="/account">
          <button type="button" className="header-account btn-menu">
            <img src="/assets/icon-account.svg" alt="내 계좌보기"/>
          </button>
        </Link>
        <nav></nav>
      </header>
    );
  }
}

export default Header;