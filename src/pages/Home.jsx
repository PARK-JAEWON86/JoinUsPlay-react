// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🏆",
    title: "팀 랭킹 시스템",
    desc: "실시간 팀 랭킹과 경쟁으로 동기부여",
  },
  {
    icon: "📤",
    title: "스탯 카드 공유",
    desc: "나만의 플레이어 카드, 손쉽게 공유",
  },
  {
    icon: "🤝",
    title: "팀 만들기 & 팀매칭",
    desc: "팀 생성, 팀원 모집, 자동 매칭까지 한 번에",
  },
  {
    icon: "🎖️",
    title: "개인 랭킹 & 뱃지",
    desc: "개인별 랭킹과 다양한 뱃지 수집",
  },
  {
    icon: "👍",
    title: "경기 후 매너 평점",
    desc: "경기 후 매너/실력 평점으로 신뢰도 UP",
  },
  { icon: "📝", title: "사용 후기", desc: "실제 사용자들의 생생한 후기 제공" },
];

function Home() {
  return (
    <div className="fifa-landing" style={{ background: "#fff" }}>
      {/* 상단 Hero Section */}
      <section className="container py-5">
        <div
          className="row align-items-center"
          style={{ minHeight: 400, position: "relative" }}
        >
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <h1
              className="fw-bold mb-4"
              style={{ fontSize: 48, lineHeight: 1.5, letterSpacing: -2 }}
            >
              JoinUs Play 에서,
              <br />
              카드 한 장으로,나를 알리고,
              <br />
              동료를 만나고,경기를 즐기세요.
            </h1>
            <p className="mb-4" style={{ color: "#6c757d", fontSize: 20 }}>
              아마추어 축구를 위한 최고의 팀 매칭 & 랭킹 플랫폼
            </p>
            <div className="d-flex gap-3">
              <Link to="/profile" className="btn btn-primary btn-lg px-4">
                한달 무료체험
              </Link>
              <Link to="/faq" className="btn btn-outline-secondary btn-lg px-4">
                문의하기
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-12 d-none d-lg-block position-relative"
            style={{ minHeight: 420 }}
          >
            {/* 작은 원 (오른쪽 위, zIndex: 4) */}
            <div
              style={{
                position: "absolute",
                bottom: -40,
                right: 360,
                width: 140,
                height: 140,
                zIndex: 4,
              }}
            >
              <img
                src="/hero3.jpg"
                alt="hero3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
              />
              <div
                className="circle-feature-btn"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: 12,
                  transform: "translateX(-50%)",
                  animation: "fadeInOut 2.4s infinite",
                  animationDelay: "0s",
                  minWidth: 80,
                  padding: "6px 18px",
                  fontSize: 15,
                }}
              >
                팀 매칭
              </div>
            </div>
            {/* 중간 원 (오른쪽 아래, zIndex: 3) */}
            <div
              style={{
                position: "absolute",
                bottom: 220,
                right: 360,
                width: 180,
                height: 180,
                zIndex: 3,
              }}
            >
              <img
                src="/hero2.jpg"
                alt="hero2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 6px 32px rgba(0,0,0,0.10)",
                }}
              />
              <div
                className="circle-feature-btn"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: 12,
                  transform: "translateX(-50%)",
                  animation: "fadeInOut 2.4s infinite",
                  animationDelay: "0.8s",
                  minWidth: 80,
                  padding: "6px 18px",
                  fontSize: 15,
                  whiteSpace: "nowrap",
                }}
              >
                경기장 매칭
              </div>
            </div>
            {/* 큰 원 (왼쪽 아래, zIndex: 2) */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 120,
                width: 320,
                height: 320,
                zIndex: 2,
              }}
            >
              <img
                src="/hero1.jpg"
                alt="hero1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                }}
              />
              <div
                className="circle-feature-btn"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: 12,
                  transform: "translateX(-50%)",
                  animation: "fadeInOut 2.4s infinite",
                  animationDelay: "1.6s",
                  minWidth: 80,
                  padding: "6px 18px",
                  fontSize: 15,
                }}
              >
                나의 스탯카드 생성
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기능 소개 */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-5" style={{ fontSize: 28 }}>
          주요 기능 소개
        </h2>
        <div className="row g-4 justify-content-center">
          {features.map((f, i) => (
            <div className="col-12 col-md-4 col-lg-4 d-flex" key={i}>
              <div className="card flex-fill text-center p-4 h-100 shadow-sm border-0">
                <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                <h5 className="fw-bold mb-2">{f.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: 15 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-5 text-center">
        <h3 className="fw-bold mb-3">지금 바로 JoinUs Play를 시작해보세요!</h3>
        <Link to="/profile" className="btn btn-primary btn-lg me-2">
          내 카드 만들기
        </Link>
        <Link to="/team" className="btn btn-outline-primary btn-lg">
          팀 찾기
        </Link>
      </section>
    </div>
  );
}

export default Home;
