// src/pages/Home.jsx
import React from 'react'

function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">나를 알리고, 팀을 꾸려, 함께 뛰자</h1>
        <p className="lead">JoinUs Play는 당신의 플레이를 위한 소셜 축구 플랫폼입니다.</p>
        <a href="/profile" className="btn btn-primary btn-lg mt-3">지금 내 카드 만들기</a>
      </div>

      {/* 기능 소개 Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🎴 카드 생성</h5>
              <p className="card-text">AI로 나만의 FIFA 스타일 카드 만들기</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🤝 팀 빌딩</h5>
              <p className="card-text">포지션별로 팀원 모집하고 매치 초대</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📅 경기 일정</h5>
              <p className="card-text">일정 잡고 장소 예약까지 한 번에</p>
            </div>
          </div>
        </div>
      </div>

      {/* 사용자 여정 Section */}
      <div className="mb-5">
        <h3 className="text-center fw-semibold mb-4">사용자 흐름</h3>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">① AI 설문으로 내 카드 생성</li>
          <li className="list-group-item">② 카드 공유 → 팀원 모집</li>
          <li className="list-group-item">③ 매치 일정 잡고 경기</li>
          <li className="list-group-item">④ 경기 후 카드 자동 업데이트</li>
        </ul>
      </div>

      {/* CTA 다시 */}
      <div className="text-center mt-5">
        <a href="/profile" className="btn btn-success btn-lg">JoinUs 시작하기</a>
      </div>
    </div>
  )
}

export default Home
