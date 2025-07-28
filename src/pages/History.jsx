// src/pages/History.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function History() {
  const [matches] = useState([
    {
      id: '20250727-01',
      date: '2025-07-27',
      team: 'Seoul Stars',
      opponent: 'Busan Blitz',
      result: '승리 3:1',
      reviewed: true
    },
    {
      id: '20250720-02',
      date: '2025-07-20',
      team: 'Seoul Stars',
      opponent: 'Incheon Eagles',
      result: '패배 1:2',
      reviewed: false
    }
  ])

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">📅 내 매치 히스토리</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>날짜</th>
            <th>팀</th>
            <th>상대</th>
            <th>결과</th>
            <th>후기</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.date}</td>
              <td>{match.team}</td>
              <td>{match.opponent}</td>
              <td>{match.result}</td>
              <td>
                {match.reviewed ? (
                  <span className="text-success">작성 완료</span>
                ) : (
                  <Link to={`/review/${match.id}`} className="btn btn-sm btn-outline-primary">
                    작성하기
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default History
