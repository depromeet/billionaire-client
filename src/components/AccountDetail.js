import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'components';

class AccountDetail extends Component {
  componentDidMount() {
    this.props.getTransactionRequest(this.props.location.state.item.id);
  }

  render() {
    const { item } = this.props.location.state;
    const { data, status } = this.props.transactions;
    return (
      <>
        {
          item ?
          <>
            <Header goBack={this.props.history.goBack} />
            <div className="account-detail">
              <section className={"account-item account-detail " + (item.accountType === 'MEMBER' ? 'main-account' : 'sub-account-1')}>
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
              {
                status === "SUCCESS" && data &&
                  data.reverse().map((item, index) => {
                    const date = new Date(item.dateTime);
                    const dateText = `${date.getMonth() + 1}.${date.getDate()}`;
                    const timeText = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
                    
                    return (
                      <article className="transaction-history" key={index}>
                        <time className="transaction-date num">{dateText}</time>
                        <ul className="transaction-list">
                          <li className="transaction-item">
                            <span className="transaction-info">
                              {item.transactionClassify === "WITHDRAWAL" ? "지출" : "수입"}
                            </span>
                            <time className="transaction-time subinfo num">{timeText}</time>
                            <span className="transaction-amount"><span className="num">
                              { item.transactionClassify === "WITHDRAWAL" ? `-${item.amount}` : item.amount }
                            </span> 家</span>
                            <span className="transaction-result subinfo"><span className="num">{"000000"}</span> 家</span>
                          </li>
                        </ul>
                      </article>
                    )
                  })
              }
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
