// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">JoinUs Play</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">내 카드</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">팀</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">일정</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rank">랭킹</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">경기 기록</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/review">후기</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                더보기
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/settings">설정</Link></li>
                <li><Link className="dropdown-item" to="/report">신고</Link></li>
                <li><Link className="dropdown-item" to="/pricing">요금제</Link></li>
                <li><Link className="dropdown-item" to="/ads">광고</Link></li>
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/admin/users">관리자</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
