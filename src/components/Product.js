import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';
import { Header, ProductDetail } from 'components';

class Product extends Component {
  initGraph = (data) => {
    console.log(data)
    const ctx = document.getElementById('graph1').getContext('2d');
    const graph = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            borderColor: '#ffdc6c', 
            data: [10, 20, 30, 40, 50, 60],
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'category',
            labels: ['January', 'February', 'March', 'April', 'May', 'June']
          }]
        }
      }
    });
  }

  componentDidMount () {
    this.props.getProductRequest();
    this.props.getAirPollutionRequest().then(() => {
      console.log('done');
      this.initGraph(this.props.airPollution.data);
      // this.initGraph();
    });
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
          products.status === "SUCCESS" && products.data.length <= 0 && <div style={{'color': 'white'}}>매입 가능한 품목이 없습니다.</div>
        }
        {
          products.status === "SUCCESS" && products.data.length > 0 && !match.params.id && 
          products.data.map((item, index) => (
            <article className="earning" key={item.id}>
              <div className="earning-info">
                <h1 className="earning-title sub1">{item.name}</h1>
                <div className="earning-amount">
                  <span className="earning-current num">116</span>
                  <span className="earning-variation num raise">42</span>
                </div>
              </div>
              <div className="earning-graph data-panel" style={{'height':'144px', 'background': '#19191b', 'padding':'10px'}}>
                <canvas id={"graph" + index} style={{'width': '100%', 'height': '100%'}}>
                  
                </canvas>
              </div>
              <Link to={`/product/${item.id}`}>
                <button id="buyStock" className="btn btn-detail btn-buy"><span>상품 상세 보러 가즈아</span></button>
              </Link>
            </article>
          ))
        }
      </>
    );
  }
}

export default Product;