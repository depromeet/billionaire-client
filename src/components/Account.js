import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'components';
import 'styles/Account.scss';

class Account extends Component {
  state = {
    nowSelecting: null,
  }

  handleSelectAccount = (data) => {
    this.setState(() => ({
      nowSelecting: data
    }));
  }

  closeDetail = () => {
    this.setState(() => ({
      nowSelecting: null
    }));
  }

  componentDidMount () {
    this.props.getAccountRequest();
    this.props.getRankingRequest();
  }

  render() {
    const me = this.props.me.data;
    const ranking = this.props.ranking.data;
    return (
      <>
        {
          this.state.nowSelecting ?
          <>
            <Redirect push to={{
              pathname: "/account/detail",
              state: { item: this.state.nowSelecting }
            }} />
          </>
          :
          <>
            <Header />
            <div className="account">
              <section className="profile">
              {
                me &&
                <>
                  <img src={me.profileImageUrl} alt="나의 프로필 이미지" className="profile-img" />
                  <div className="profile-info">
                    <div><span className="num" style={{ 'fontWeight': 'bold' }}>6</span>기</div>
                    <div>{me.name}</div>
                  </div>
                  <div className="profile-account" style={{ 'fontWeight': '300' }}>
                    <div>현재 <span className="emphasis underline num">
                    {
                      ranking &&
                      ranking.findIndex(item => (
                        parseInt(item.member.id) === me.id
                      )) + 1
                    }
                    </span>위</div>
                  </div>
                </>
              }
              </section>
              <ul className="account-list">
                {
                  this.props.accounts.status === "SUCCESS" && this.props.accounts.data &&
                  this.props.accounts.data.map((item, index) => (
                    <li
                      className={'account-item ' + (item.accountType === 'MEMBER' ? 'main-account' : 'sub-account-1')}
                      onClick={() => this.handleSelectAccount(item)}
                      key={index}>
                      <span className="account-name">{item.name}</span>
                      <span className="account-info">
                        <span className="num emphasis">{item.balance}</span> 家
                        <div className={(item.accountType === 'MEMBER' ? 'main-number' : 'sub-number') + " account-number num"}>
                          {item.accountNumber}
                          <button className="btn-copy" style={{ 'borderColor': '#5c594d' }}>복사하기
                            <div className="copybox copy-back"></div>
                            <div className={"copybox copy-front " + (item.accountType === 'MEMBER' ? 'main-account' : 'sub-account-1')}></div>
                          </button>
                        </div>
                      </span>
                    </li>
                  ))
                }
                <li className="account-item add-account">
                  <button class="add-account-button">상품가입하기</button>
                </li>
              </ul>
            </div>
          </>
        }
      </>
    );
  }
}

export default Account;
