// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar navbar-glassmorphism"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1050,
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.95)",
        borderBottom: "1px solid #e3e3e3",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: 22,
            color: "#0d6efd",
            letterSpacing: 1,
            textShadow: "0 2px 8px rgba(0,0,0,0.10)",
            fontFamily: "inherit",
          }}
        >
          <span style={{ fontWeight: 700 }}>JoinUs</span>
          <span style={{ fontWeight: 300, marginLeft: 4 }}>Play</span>
        </Link>

        <button
          className="btn btn-primary"
          onClick={toggleMenu}
          style={{ display: "none" }}
        >
          메뉴
        </button>

        <div
          className={`nav-menu ${
            isMenuOpen ? "show" : ""
          } d-flex align-items-center gap-3`}
        >
          <Link className="nav-link" to="/profile">
            내 카드
          </Link>
          <Link className="nav-link" to="/team">
            팀
          </Link>
          <Link className="nav-link" to="/schedule">
            일정
          </Link>
          <Link className="nav-link" to="/rank">
            랭킹
          </Link>
          <Link className="nav-link" to="/history">
            경기 기록
          </Link>
          <Link className="nav-link" to="/review">
            후기
          </Link>

          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle">더보기</button>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/settings">
                설정
              </Link>
              <Link className="dropdown-item" to="/report">
                신고
              </Link>
              <Link className="dropdown-item" to="/pricing">
                요금제
              </Link>
              <Link className="dropdown-item" to="/ads">
                광고
              </Link>
              <Link className="dropdown-item" to="/faq">
                FAQ
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/admin/users">
                관리자
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
