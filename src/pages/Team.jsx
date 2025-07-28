import React, { useState } from 'react'

function Team() {
  const [teamInfo, setTeamInfo] = useState({
    name: '',
    slogan: '',
    color: '#198754',
    logo: '',
    positions: {
      FW: 0,
      MF: 0,
      DF: 0,
      GK: 0,
    }
  })

  const [teamLink, setTeamLink] = useState('')
  const [applicants, setApplicants] = useState([
    { name: '이강인', status: 'pending' },
    { name: '손흥민', status: 'pending' }
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setTeamInfo({ ...teamInfo, [name]: value })
  }

  const handlePositionChange = (pos, value) => {
    setTeamInfo({
      ...teamInfo,
      positions: { ...teamInfo.positions, [pos]: parseInt(value) }
    })
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setTeamInfo({ ...teamInfo, logo: url })
    }
  }

  const handleApprove = (index) => {
    const updated = [...applicants]
    updated[index].status = 'approved'
    setApplicants(updated)
  }

  const handleReject = (index) => {
    const updated = [...applicants]
    updated[index].status = 'rejected'
    setApplicants(updated)
  }

  const generateLink = () => {
    setTeamLink(`https://joinus.team/${encodeURIComponent(teamInfo.name || 'myteam')}`)
  }

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">⚽ 팀 생성 및 포지션 모집</h2>

      <div className="row">
        {/* 왼쪽: 입력 폼 */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">팀 이름</label>
              <input type="text" name="name" className="form-control" value={teamInfo.name} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">팀 슬로건</label>
              <input type="text" name="slogan" className="form-control" value={teamInfo.slogan} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">팀 컬러</label>
              <input type="color" name="color" className="form-control form-control-color" value={teamInfo.color} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">팀 로고 업로드</label>
              <input type="file" className="form-control" accept="image/*" onChange={handleLogoUpload} />
            </div>

            <div className="mb-3">
              <label className="form-label">포지션별 모집 인원</label>
              {['FW', 'MF', 'DF', 'GK'].map((pos) => (
                <div key={pos} className="input-group mb-2">
                  <span className="input-group-text">{pos}</span>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    value={teamInfo.positions[pos]}
                    onChange={(e) => handlePositionChange(pos, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <button type="button" className="btn btn-success me-2" onClick={generateLink}>팀 링크 생성</button>
            {teamLink && (
              <input className="form-control mt-2" readOnly value={teamLink} onClick={() => navigator.clipboard.writeText(teamLink)} />
            )}
          </form>
        </div>

        {/* 오른쪽: 미리보기 */}
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="card shadow-sm h-100" style={{ borderColor: teamInfo.color }}>
            {teamInfo.logo && (
              <img src={teamInfo.logo} className="card-img-top p-2" alt="팀 로고" style={{ maxHeight: 150, objectFit: 'contain' }} />
            )}
            <div className="card-body">
              <h4 className="card-title fw-bold">{teamInfo.name || '팀 이름'}</h4>
              <p className="card-text">{teamInfo.slogan || '슬로건을 입력하세요'}</p>
              <ul className="list-group list-group-flush">
                {['FW', 'MF', 'DF', 'GK'].map((pos) => (
                  <li key={pos} className="list-group-item d-flex justify-content-between">
                    <span>{pos}</span>
                    <span>{teamInfo.positions[pos]} 명 모집</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 지원자 승인/거절 리스트 */}
      <div className="mt-5">
        <h4 className="fw-semibold mb-3">📥 팀원 지원자 목록</h4>
        {applicants.length === 0 ? (
          <p className="text-muted">지원자가 없습니다.</p>
        ) : (
          <ul className="list-group">
            {applicants.map((app, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{app.name}</span>
                {app.status === 'pending' ? (
                  <div>
                    <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleApprove(idx)}>승인</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleReject(idx)}>거절</button>
                  </div>
                ) : (
                  <span className={`badge ${app.status === 'approved' ? 'bg-success' : 'bg-secondary'}`}>
                    {app.status === 'approved' ? '승인됨' : '거절됨'}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Team
