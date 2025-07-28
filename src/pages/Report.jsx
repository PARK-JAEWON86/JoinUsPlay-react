// src/pages/Report.jsx
import React, { useState } from 'react'

function Report() {
  const [report, setReport] = useState({
    type: '',
    target: '',
    description: '',
    evidence: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setReport({ ...report, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('신고 제출:', report)
    setSubmitted(true)
  }

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">🚨 신고하기</h2>
      
      {!submitted ? (
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">신고 유형</label>
                    <select
                      className="form-select"
                      name="type"
                      value={report.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="">선택하세요</option>
                      <option value="harassment">괴롭힘/폭력</option>
                      <option value="cheating">부정행위</option>
                      <option value="spam">스팸/광고</option>
                      <option value="inappropriate">부적절한 콘텐츠</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">신고 대상</label>
                    <input
                      type="text"
                      className="form-control"
                      name="target"
                      value={report.target}
                      onChange={handleChange}
                      placeholder="사용자명 또는 팀명"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">상세 내용</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="description"
                      value={report.description}
                      onChange={handleChange}
                      placeholder="구체적인 상황을 설명해 주세요..."
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">증거 자료 (선택사항)</label>
                    <input
                      type="file"
                      className="form-control"
                      name="evidence"
                      onChange={handleChange}
                      accept="image/*,.pdf,.txt"
                    />
                    <div className="form-text">스크린샷, 채팅 기록 등을 첨부할 수 있습니다.</div>
                  </div>

                  <button type="submit" className="btn btn-danger">신고 제출</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">신고 가이드라인</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✅ 구체적인 사실을 바탕으로 신고</li>
                  <li className="mb-2">✅ 증거 자료 첨부 권장</li>
                  <li className="mb-2">❌ 허위 신고는 제재 대상</li>
                  <li className="mb-2">❌ 개인정보 노출 금지</li>
                </ul>
                <p className="text-muted small">
                  신고 후 24시간 내에 검토 결과를 알려드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-success">
          <h4 className="alert-heading">신고가 접수되었습니다!</h4>
          <p>신고해 주셔서 감사합니다. 검토 후 결과를 알려드리겠습니다.</p>
          <hr />
          <p className="mb-0">
            <button 
              className="btn btn-outline-success btn-sm"
              onClick={() => setSubmitted(false)}
            >
              추가 신고하기
            </button>
          </p>
        </div>
      )}
    </div>
  )
}

export default Report
