// src/pages/Ads.jsx
import React from 'react'

function Ads() {
  const sponsors = [
    {
      name: 'Nike',
      category: '스포츠웨어',
      description: '축구화 및 운동복 후원',
      logo: '🏃‍♂️',
      link: '#'
    },
    {
      name: 'Adidas',
      category: '스포츠웨어',
      description: '팀 유니폼 및 장비 후원',
      logo: '⚽',
      link: '#'
    },
    {
      name: 'Puma',
      category: '스포츠웨어',
      description: '축구화 및 액세서리 후원',
      logo: '🐆',
      link: '#'
    }
  ]

  const ads = [
    {
      title: '프리미엄 축구장 예약',
      description: '전국 주요 축구장 할인 예약 서비스',
      image: '🏟️',
      discount: '20% 할인'
    },
    {
      title: '축구 용품 쇼핑몰',
      description: '정품 축구화, 유니폼, 장비 구매',
      image: '🛒',
      discount: '무료 배송'
    },
    {
      title: '축구 강습 프로그램',
      description: '전문 코치와 함께하는 개인/팀 강습',
      image: '👨‍🏫',
      discount: '첫 강습 무료'
    }
  ]

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">🎯 광고 및 후원</h2>
      
      <div className="row mb-5">
        <div className="col-md-8">
          <h4 className="mb-3">🏢 공식 스폰서</h4>
          <div className="row">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="display-4 mb-3">{sponsor.logo}</div>
                    <h5 className="card-title">{sponsor.name}</h5>
                    <p className="text-muted small">{sponsor.category}</p>
                    <p className="card-text">{sponsor.description}</p>
                    <a href={sponsor.link} className="btn btn-outline-primary btn-sm">
                      자세히 보기
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">💡 후원 문의</h5>
              <p className="card-text">
                JoinUs Play와 함께 성장하고 싶은 브랜드를 찾고 있습니다.
              </p>
              <ul className="list-unstyled">
                <li>✅ 브랜드 노출</li>
                <li>✅ 타겟 마케팅</li>
                <li>✅ 사용자 데이터</li>
                <li>✅ 커스텀 캠페인</li>
              </ul>
              <button className="btn btn-primary">후원 문의하기</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h4 className="mb-3">🛍️ 추천 상품</h4>
          <div className="row">
            {ads.map((ad, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <span className="display-4">{ad.image}</span>
                    </div>
                    <h5 className="card-title">{ad.title}</h5>
                    <p className="card-text">{ad.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">{ad.discount}</span>
                      <button className="btn btn-primary btn-sm">자세히 보기</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="alert alert-info">
            <h5 className="alert-heading">📊 광고 효과</h5>
            <p className="mb-0">
              JoinUs Play는 전국 10만 명 이상의 축구 애호가들이 이용하는 플랫폼입니다. 
              타겟팅된 마케팅으로 효과적인 브랜드 노출을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ads