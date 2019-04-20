import React, { Component } from 'react';
import { Header, RankingSaturday } from 'components';
import 'styles/Ranking.scss';

class Ranking extends Component {
  componentDidMount () {
    this.props.getRankingRequest();
  }

  render() {
    const { status, data } = this.props.ranking;
    const me = this.props.me.data;
    return (
      <>
        <Header />
        {
          (new Date().getDay() === 6) ?
            <RankingSaturday data={data} />
          :
          <>
            <div className="selection">금주의 어떤 이가<br/>
              디프가문의
              <div className="selection-select1">
                <img src="./assets/badge.png" alt="" className="selection-icon" />영광
              </div>
              <span id="postpositionOptions">을/를</span>
              <br/>
              차지할 것인가.
            </div>
            <div className="ranking">
              {
                me && 
                <section className="profile">
                  <img src={me.profileImageUrl} alt="나의 프로필 이미지" className="profile-img" />
                  <div className="profile-info">
                    <div><span className="num" style={{'fontWeight': 'bold'}}>6</span>기</div>
                    <div>{me.name}</div>
                  </div>
                  <div className="profile-account" style={{'fontWeight': '300'}}>
                    <div>현재 <span className="emphasis underline num">
                    {
                      data && 
                      data.findIndex(item => (
                        parseInt(item.member.id) === me.id
                      )) + 1
                    }
                    </span>위</div>
                    <div><span className="emphasis underline num">
                    {
                      data && 
                      data.find(item => (
                        parseInt(item.member.id) === me.id
                      )).assetValue
                    }
                    </span>家</div>
                  </div>
                </section>
              }
             
              <input type="text" className="search input-search" placeholder="이름 검색" />

              <ul className="profile-list">
                {
                  (data && status === "SUCCESS") && 
                  data.map((item, index) => (
                    <li key={index}>
                      <div className="num list-num">{index + 1}</div>
                      <img src={item.member.profileImageUrl} alt="" className="profile-img profile-list-img"/>
                      <div className="profile-list-name">{item.member.name}</div>
                      <div className="profile-list-account"><span className="num">{item.assetValue}</span> 家</div>
                    </li>
                  ))
                }
              </ul>
              <button className="btn btn-fixed btn-more"><span>나머지 순위 더보기</span></button>
            </div>
          </>
        }
      </>
    );
  }
}

export default Ranking;
