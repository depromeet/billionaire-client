import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {
          this.props.close ?
            <div className="icon-previous" onClick={this.props.close}><span className="hidden">뒤로가기</span></div>
          : this.props.goBack ?
            <div className="icon-previous" onClick={this.props.goBack}><span className="hidden">뒤로가기</span></div>
          : <div className="header-logo"><span className="hidden">디프만 로고</span></div>
        }
        <button type="button" className="header-menu btn-menu"><span className="hidden">메인메뉴 열기</span>
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