// src/pages/Profile.jsx
import React, { useState } from 'react'

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    speed: 50,
    pass: 50,
    defense: 50,
    image: '',
    description: '',
    strengths: '',
    preferredFoot: 'right',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('🔍 제출된 프로필 정보:', formData)
    alert('프로필 카드가 생성되었습니다!')
    // TODO: AI 기반 추천 기능 + 이미지 렌더링 + 서버 저장 연동 예정
  }

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">🙋 나의 스탯 카드 작성</h2>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">이름</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">포지션</label>
            <select name="position" className="form-select" value={formData.position} onChange={handleChange} required>
              <option value="">선택</option>
              <option value="FW">FW (공격수)</option>
              <option value="MF">MF (미드필더)</option>
              <option value="DF">DF (수비수)</option>
              <option value="GK">GK (골키퍼)</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">설명 (한 줄 소개)</label>
            <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">강점 (자유 서술)</label>
            <textarea className="form-control" name="strengths" rows="2" value={formData.strengths} onChange={handleChange} />
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">스탯 (0~100)</label>
          <div className="mb-2">
            <label>🏃 스피드</label>
            <input type="range" className="form-range" name="speed" min="0" max="100" value={formData.speed} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label>🎯 패스</label>
            <input type="range" className="form-range" name="pass" min="0" max="100" value={formData.pass} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>🛡️ 수비</label>
            <input type="range" className="form-range" name="defense" min="0" max="100" value={formData.defense} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">선호하는 발</label>
            <select name="preferredFoot" className="form-select" value={formData.preferredFoot} onChange={handleChange}>
              <option value="right">오른발</option>
              <option value="left">왼발</option>
              <option value="both">양발</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">프로필 사진 URL</label>
            <input type="url" className="form-control" name="image" value={formData.image} onChange={handleChange} />
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-success w-100">카드 생성</button>
        </div>
      </form>
    </div>
  )
}

export default Profile
