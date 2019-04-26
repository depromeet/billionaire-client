import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {
          this.props.close ?
            <div className="icon-previous" onClick={this.props.close}>뒤로가기</div>
          : this.props.goBack ?
            <div className="icon-previous" onClick={this.props.goBack}>뒤로가기</div>
          : <div className="header-logo">로고</div>
        }
        <button type="button" className="header-menu btn-menu">메인메뉴 열기
          <span className="menubar menubar-top"></span>
          <span className="menubar menubar-middle"></span>
          <span className="menubar menubar-bottom"></span>
        </button>
        <nav></nav>
      </header>
    );
  }
}

export default Header;