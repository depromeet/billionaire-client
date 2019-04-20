import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {
          this.props.close ?
            <div className="header-previous" onClick={this.props.close}>뒤로가기</div>
          : this.props.link ?
            <Link to={this.props.link}>
              <div className="header-previous">뒤로가기</div>
            </Link>
          : <div className="header-logo">로고</div>
        }
        <div className="header-menu">
          <button type="button" className="btn-menu">메인메뉴 열기</button>
          <span className="menubar menubar-top"></span>
          <span className="menubar menubar-middle"></span>
          <span className="menubar menubar-bottom"></span>
        </div>
        <nav></nav>
      </header>
    );
  }
}

export default Header;