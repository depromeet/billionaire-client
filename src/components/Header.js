import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {
          this.props.close ?
            <div className="header-previous" onClick={this.props.close}>뒤로가기</div>
          : this.props.goBack ?
            <div className="header-previous" onClick={this.props.goBack}>뒤로가기</div>
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