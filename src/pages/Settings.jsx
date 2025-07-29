// src/pages/Settings.jsx
import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    publicProfile: true,
    preferredPosition: "MF",
    language: "ko",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">설정</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">알림 설정</h5>

              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">푸시 알림</label>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="emailAlerts"
                    checked={settings.emailAlerts}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">이메일 알림</label>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="publicProfile"
                    checked={settings.publicProfile}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">프로필 공개</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">선호 포지션</label>
                <select
                  className="form-select"
                  name="preferredPosition"
                  value={settings.preferredPosition}
                  onChange={handleChange}
                >
                  <option value="FW">FW (공격수)</option>
                  <option value="MF">MF (미드필더)</option>
                  <option value="DF">DF (수비수)</option>
                  <option value="GK">GK (골키퍼)</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">언어</label>
                <select
                  className="form-select"
                  name="language"
                  value={settings.language}
                  onChange={handleChange}
                >
                  <option value="ko">한국어</option>
                  <option value="en">English</option>
                </select>
              </div>

              <button className="btn btn-primary">설정 저장</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">계정 정보</h5>
              <p className="text-muted">이메일: user@example.com</p>
              <p className="text-muted">가입일: 2024-01-01</p>
              <button className="btn btn-outline-secondary btn-sm">
                비밀번호 변경
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
