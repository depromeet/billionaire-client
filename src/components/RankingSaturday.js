import React from 'react';

const RankingSaturday = (props) => {
  return (
    <>
      <div className="selection">
        금주의 디프가문을<br/>
        <select className="selection-select">
          <option value="빛낸이">빛낸 이</option>
          <option value="만든이">만든 이</option>
        </select>
        <span className="selection-select-postposit">가</span> 궁금하다면,<br/>
        고개를 들어 이들을 보게하라.
      </div>
      <section className="ranking">
        {
          props.data &&
          props.data.map((item, index) => {
            if (index > 2) return <div key={index}></div>;
            else return (
              <div className={
                "ranking-profile " + 
                (index + 1 === 1 ? 'ranking-1st'
                : index + 1 === 2 ? 'ranking-2nd'
                : index + 1 === 3 ? 'ranking-3rd' : '')
                }
                key={index}>
                <img src={item.member.profileImageUrl} className="profile-img" width="100" alt={`${index + 1}위 ${item.member.name} 사진`} />
                <div className="ranking-word">
                <span className="ranking-num num">{index + 1}</span>위</div>
              </div>
            )
          })
        }
      </section>
    </>
  );
}

export default RankingSaturday;