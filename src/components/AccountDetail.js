import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'components';

class AccountDetail extends Component {
  render() {
    const { item } = this.props.location.state;
    return (
      <>
        {
          item ?
          <>
            <Header link="/account" />
            <div className="account-detail">
              <section className={"account-item account-detail " + (item.accountType === 'MEMBER' ? 'main-account' : 'sub-account')}>
                <h1 className="account-name">{ item.name }</h1>
                <span className="account-info">
                  <span className="num emphasis">{ item.balance }</span> 家
                  <div className={(item.accountType === 'MEMBER' ? 'main-number' : 'sub-number') + " account-number num"}>
                    {item.accountNumber}
                    <button className="btn-copy" style={{ 'borderColor': '#5c594d' }}>복사하기
                      <div className="copybox copy-back"></div>
                      <div className={"copybox copy-front " + (item.accountType === 'MEMBER' ? 'main-account' : 'sub-account')}></div>
                    </button>
                  </div>
                </span>
              </section>
              <article className="transaction-history">
                <time className="transaction-date num">4.2</time>
                <ul className="transaction-list">
                  <li className="transaction-item">
                    <span className="transaction-info">미세먼지야 덤벼라</span>
                    <time className="transaction-time subinfo num">16:58</time>
                    <span className="transaction-amount"><span className="num">-500</span> 家</span>
                    <span className="transaction-result subinfo"><span className="num">24,000</span> 家</span>
                  </li>
                </ul>
              </article>
              <article className="transaction-history">
                <time className="transaction-date num">3.27</time>
                <ul className="transaction-list">
                  <li className="transaction-item">
                    <span className="transaction-info">미세먼지야 덤벼라</span>
                    <time className="transaction-time subinfo num">17:50</time>
                    <span className="transaction-amount"><span className="num">-500</span> 家</span>
                    <span className="transaction-result subinfo"><span className="num">24,500</span> 家</span>
                  </li>
                  <li className="transaction-item">
                    <span className="transaction-info">미세먼지야 덤벼라</span>
                    <time className="transaction-time subinfo num">17:43</time>
                    <span className="transaction-amount"><span className="num">-500</span> 家</span>
                    <span className="transaction-result subinfo"><span className="num">25,000</span> 家</span>
                  </li>
                </ul>
              </article>
              <article className="transaction-history">
                <time className="transaction-date num">2.26</time>
                <ul className="transaction-list">
                  <li className="transaction-item">
                    <span className="transaction-info">미세먼지야 덤벼라</span>
                    <time className="transaction-time subinfo num">13:27</time>
                    <span className="transaction-amount"><span className="num">-500</span> 家</span>
                    <span className="transaction-result subinfo"><span className="num">25,500</span> 家</span>
                  </li>
                  <li className="transaction-item">
                    <span className="transaction-info">미세먼지야 덤벼라</span>
                    <time className="transaction-time subinfo num">13:00</time>
                    <span className="transaction-amount"><span className="num">-500</span> 家</span>
                    <span className="transaction-result subinfo"><span className="num">26,000</span> 家</span>
                  </li>
                </ul>
              </article>
            </div>
          </>
          :
          <Redirect to="/account" /> 
        }
        
      </>
    );
  }
}

export default AccountDetail;
