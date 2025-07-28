// src/pages/Pricing.jsx
import React from 'react'

function Pricing() {
  const plans = [
    {
      name: '무료',
      price: '0원',
      features: [
        '기본 선수 카드 생성',
        '팀 생성 및 참여',
        '경기 일정 확인',
        '기본 랭킹 확인'
      ],
      popular: false
    },
    {
      name: '프리미엄',
      price: '9,900원/월',
      features: [
        '무료 기능 모두 포함',
        '고급 통계 및 분석',
        '우선 매칭',
        '광고 제거',
        '커스텀 팀 로고',
        '24시간 고객 지원'
      ],
      popular: true
    },
    {
      name: '팀 플랜',
      price: '29,900원/월',
      features: [
        '프리미엄 기능 모두 포함',
        '팀 전용 관리 도구',
        '팀 통계 대시보드',
        '팀원 초대 관리',
        '팀 전용 채팅',
        '팀 이벤트 관리'
      ],
      popular: false
    }
  ]

  return (
    <div className="container">
      <h2 className="fw-bold mb-4 text-center">💳 요금제 안내</h2>
      <p className="text-center text-muted mb-5">나에게 맞는 플랜을 선택하세요</p>

      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card h-100 shadow-sm ${plan.popular ? 'border-primary' : ''}`}>
              {plan.popular && (
                <div className="card-header bg-primary text-white text-center">
                  <span className="badge bg-warning text-dark">인기</span>
                </div>
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{plan.name}</h5>
                <div className="text-center mb-4">
                  <span className="display-6 fw-bold">{plan.price}</span>
                  {plan.price !== '0원' && <span className="text-muted">/월</span>}
                </div>
                <ul className="list-unstyled flex-grow-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn btn-lg mt-4 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {plan.price === '0원' ? '무료 시작' : '구독하기'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">💡 자주 묻는 질문</h5>
              <div className="row text-start">
                <div className="col-md-6">
                  <h6>언제든지 해지할 수 있나요?</h6>
                  <p className="text-muted">네, 언제든지 구독을 해지할 수 있습니다.</p>
                </div>
                <div className="col-md-6">
                  <h6>무료 체험이 가능한가요?</h6>
                  <p className="text-muted">프리미엄 플랜은 7일 무료 체험이 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
