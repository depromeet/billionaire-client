import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ProductDetail, ProductGraph } from 'components';

class Product extends Component {  
  componentDidMount () {
    this.props.getProductRequest();
    this.props.getAirPollutionRequest();
    this.props.getKakaotalkRequest();
    this.props.getDpmSessionRequest();
  }

  render() {
    const { products, match } = this.props;
    return (
      <>
        {
          !match.params.id ?
          <Header />
          :
          <ProductDetail
            getProductDetailRequest={this.props.getProductDetailRequest}
            joinProductRequest={this.props.joinProductRequest}
            join={this.props.join}
            id={match.params.id}
            data={this.props.productDetail.data}
            goBack={this.props.history.goBack}
          />
        }
        {
          products.status === "SUCCESS" && products.data.length <= 0 &&
          <div style={{'color': 'white'}}>
            매입 가능한 품목이 없습니다.
          </div>
        }
        {
          products.status === "SUCCESS" && products.data.length > 0 && !match.params.id && 
          products.data.map((item) => (
            <article className="earning" key={item.id}>
              <div className="earning-info">
                <h1 className="earning-title sub1">
                  <span className="earning-title-part">{item.name}</span>
                </h1>
                <div className="earning-amount">
                  <span className="earning-current num">116</span>
                  <span className="earning-variation num raise">42</span>
                </div>
              </div>
              {
                (this.props.airPollution.data && item.dataType === "AIR_POLLUTION") ? 
                  <ProductGraph
                    data={this.props.airPollution.data}
                  />  
                : (this.props.dpmSession.data && item.dataType === "NUMBER_OF_ATTENDEE") ? 
                  <ProductGraph data={this.props.dpmSession.data} />
                : (this.props.kakaotalk.data && item.dataType === "KAKAOTALK") ?
                  <ProductGraph data={this.props.kakaotalk.data} />
                : <></>
              }
             <Link to={`/product/${item.id}`}>
                <button id="buyStock" className="btn btn-detail btn-buy">
                  <span>상품 상세 보러 가즈아</span>
                </button>
              </Link>
            </article>
          ))
        }
      </>
    );
  }
}

export default Product;