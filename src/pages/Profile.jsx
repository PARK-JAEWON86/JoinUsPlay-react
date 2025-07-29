// src/pages/Profile.jsx
import React, { useState } from "react";

function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    speed: 50,
    pass: 50,
    defense: 50,
    image: "",
    description: "",
    strengths: "",
    preferredFoot: "right",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 프로필 정보:", formData);
    setShowPreview(true);
    // TODO: AI 기반 추천 기능 + 이미지 렌더링 + 서버 저장 연동 예정
  };

  const getPositionColor = (position) => {
    switch (position) {
      case "FW":
        return "#dc2626";
      case "MF":
        return "#f59e0b";
      case "DF":
        return "#059669";
      case "GK":
        return "#3b82f6";
      default:
        return "#6b7280";
    }
  };

  const getOverallRating = () => {
    return Math.round((formData.speed + formData.pass + formData.defense) / 3);
  };

  return (
    <div className="container">
      <h2 className="fw-bold mb-4 text-center">나의 스탯 카드 작성</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">선수 정보 입력</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">이름</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">포지션</label>
                      <select
                        name="position"
                        className="form-select"
                        value={formData.position}
                        onChange={handleChange}
                        required
                      >
                        <option value="">선택</option>
                        <option value="FW">FW (공격수)</option>
                        <option value="MF">MF (미드필더)</option>
                        <option value="DF">DF (수비수)</option>
                        <option value="GK">GK (골키퍼)</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">설명 (한 줄 소개)</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">강점 (자유 서술)</label>
                      <textarea
                        className="form-control"
                        name="strengths"
                        rows="2"
                        value={formData.strengths}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">스탯 (0~100)</label>
                    <div className="mb-3">
                      <label>스피드</label>
                      <div className="stat-container">
                        <input
                          type="range"
                          className="form-range"
                          name="speed"
                          min="0"
                          max="100"
                          value={formData.speed}
                          onChange={handleChange}
                        />
                        <span className="stat-value">{formData.speed}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label>패스</label>
                      <div className="stat-container">
                        <input
                          type="range"
                          className="form-range"
                          name="pass"
                          min="0"
                          max="100"
                          value={formData.pass}
                          onChange={handleChange}
                        />
                        <span className="stat-value">{formData.pass}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label>수비</label>
                      <div className="stat-container">
                        <input
                          type="range"
                          className="form-range"
                          name="defense"
                          min="0"
                          max="100"
                          value={formData.defense}
                          onChange={handleChange}
                        />
                        <span className="stat-value">{formData.defense}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">선호하는 발</label>
                      <select
                        name="preferredFoot"
                        className="form-select"
                        value={formData.preferredFoot}
                        onChange={handleChange}
                      >
                        <option value="right">오른발</option>
                        <option value="left">왼발</option>
                        <option value="both">양발</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">프로필 사진 URL</label>
                      <input
                        type="url"
                        className="form-control"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-success btn-lg">
                    카드 생성
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">카드 미리보기</h5>
            </div>
            <div className="card-body">
              <div className="player-card">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: getPositionColor(formData.position),
                  }}
                >
                  <div className="position-badge">
                    {formData.position || "?"}
                  </div>
                  <div className="overall-rating">{getOverallRating()}</div>
                </div>
                <div className="card-body">
                  <div className="player-info">
                    <h4 className="player-name">{formData.name || "선수명"}</h4>
                    <p className="player-description">
                      {formData.description || "설명을 입력하세요"}
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stat-item">
                      <span className="stat-label">SPD</span>
                      <div className="stat-bar">
                        <div
                          className="stat-fill"
                          style={{ width: `${formData.speed}%` }}
                        ></div>
                      </div>
                      <span className="stat-number">{formData.speed}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">PAS</span>
                      <div className="stat-bar">
                        <div
                          className="stat-fill"
                          style={{ width: `${formData.pass}%` }}
                        ></div>
                      </div>
                      <span className="stat-number">{formData.pass}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">DEF</span>
                      <div className="stat-bar">
                        <div
                          className="stat-fill"
                          style={{ width: `${formData.defense}%` }}
                        ></div>
                      </div>
                      <span className="stat-number">{formData.defense}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="alert alert-success mt-4">
          <h4 className="alert-heading">카드가 생성되었습니다!</h4>
          <p>나만의 FIFA 스타일 선수 카드가 완성되었습니다.</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
