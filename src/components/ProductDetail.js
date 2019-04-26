import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Header, Modal, ProductAgreement } from 'components';

class ProductDetail extends Component {
  state = {
    isShowAgreement: false,
    isMessageOpened: false,
    redirect: null,
  }

  toggleShowAgreement = () => {
    this.setState((state) => ({
      isShowAgreement: !state.isShowAgreement
    }));
  }

  closeMessage = () => {
    this.setState(() => ({
      isShowAgreement: false,
      isMessageOpened: false,
      redirect: '/account',
    }));
  }

  handleAgree = () => {
    this.joinProduct();
    this.setState((state) => ({
      ...state,
      isMessageOpened: true,
    }));
  }

  joinProduct = () => {
    const { joinProductRequest, id } = this.props;
    joinProductRequest(id);
  }

  getNowDate = () => {
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = now.getMonth() + 1;
    let date = now.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    year = year.substr(year.length - 2, 2);
    
    return `${year}.${month}.${date}`;
  }

  componentDidMount () {
    const { getProductDetailRequest, id } = this.props;
    getProductDetailRequest(id);
  }

  render() {
    return (
      <>
        { this.state.redirect &&
          <Redirect to={ this.state.redirect } />
        }
        {
          this.state.isShowAgreement ?
          <>
            <Header close={this.toggleShowAgreement} />
            <ProductAgreement handleAgree={this.handleAgree} />
          </>
          :
          <>
            <Header goBack={this.props.goBack} />
            {
              this.props.data &&
              <>
                <article className="earning">
                  <div className="earning-info">
                    <h1 className="earning-title sub1">{this.props.data.name}</h1>
                    <div className="earning-amount">
                      <span className="earning-current num">116</span>
                      <span className="earning-variation num raise">42</span>
                    </div>
                  </div>
                  <div className="earning-graph data-panel" style={{'height':'128px', 'background': '#19191b', 'padding':'26px'}}>그래프 위치</div>
                </article>
                
                {/* 디자인 시안의 변경에 따라 그래프의 표시주기를 변경하는 버튼이 추가되었습니다. */}
                <div className="graph-control">
                  <button className="btn btn-graph">1일</button>
                  <button className="btn btn-graph">1개월</button>
                  <button className="btn btn-graph">6개월</button>
                  <button className="btn btn-graph">1년</button>
                </div>
                <div className="terms">
                  <div className="terms-title">투자금액</div>
                  <div className="terms-content-medium terms-content-select">
                    1만원
                  </div>
                  <button className="terms-select-item icon-down">옵션 더보기</button>
                </div>
                <div className="terms">
                  <div className="terms-title verticaltop">기간</div>
                  <span className="terms-content-medium">일주일</span>
                </div>
                <div className="terms">
                  <div className="terms-title verticaltop">수익률</div>
                  <span className="terms-content-medium">최대 200%</span>
                </div>
                <div className="terms">
                  <div className="terms-title verticaltop">조건</div>
                  <div className="terms-content-medium">
                    {this.props.data.description}
                  </div>
                </div>
                <button id="buyStock" className="btn btn-default btn-buy" onClick={this.toggleShowAgreement}><span>상품 구매하러 가즈아</span></button>
              </>
            }
          </>
        }
        {
          this.state.isMessageOpened && 
            (
              this.props.join.status === "SUCCESS" ?
                <Modal>
                  투자금액 <span className="num">500</span>家를<br/> <span className="num">
                  { 
                    this.getNowDate()
                  }
                  </span>에 구매했습니다.
                  <button id="modalConfirm" className="btn-confirm" onClick={this.closeMessage}>확인</button>   
                </Modal>
              : this.props.join.status === "FAILURE" && this.props.join.err &&
                <Modal>
                  {this.props.join.err.response.data.message}
                  <button id="modalConfirm" className="btn-confirm" onClick={this.closeMessage}>확인</button>
                </Modal>
            )
        }
      </>
    );
  }
}

export default ProductDetail;