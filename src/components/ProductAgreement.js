import React, { Component } from 'react';

class ProductAgreement extends Component {
  state = {
    agreementContent: `1) 상품 가입 약관
      이 상품을 구매하면, 앞으로 영영 상품을 판매 하실 수 없습니다. 평생 디프만과 함께하며, ‘미세먼지야 덤벼라’ 상품에 투자할 것을 동의합니다.

      2) 상품 가입 약관
      이 상품을 구매하면, 앞으로 영영 상품을 판매 하실 수 없습니다. 평생 디프만과 함께하며, ‘미세먼지야 덤벼라’ 상품에 투자할 것을 동의합니다.

      3) 상품 가입 약관
      이 상품을 구매하면, 앞으로 영영 상품을 판매 하실 수 없습니다. 평생 디프만과 함께하며, ‘미세먼지야 덤벼라’ 상품에 투자할 것을 동의합니다.

      4) 상품 가입 약관
      이 상품을 구매하면, 앞으로 영영 상품을 판매 하실 수 없습니다. 평생 디프만과 함께하며, ‘미세먼지야 덤벼라’ 상품에 투자할 것을 동의합니다.`
  }

  render() {
    return (
      <>
        <article className="agreement">
          <h1 className="agreement-title">약관동의</h1>
          <div id="agreement" className="agreement-content data-panel">{this.state.agreementContent}</div>
        </article>
        <div className="terms">
          <div className="terms-title">투자금액</div>
          <span className="terms-content-large"><span className="num">500</span>家</span>
        </div>
        <div className="terms">
          <div className="terms-title">만료일</div>
          <span className="terms-content-large"><span className="num">19.04.02</span></span>
        </div>
        <button className="btn btn-fixed btn-agree" onClick={this.props.handleAgree}><span>모든 약관에 동의합니다.</span></button>
      </>
    );
  }
}

export default ProductAgreement;