// src/components/Badges.jsx
import React from 'react'

const sampleBadges = [
  { label: '🏅 첫 출전', description: '첫 경기에 참가함', unlocked: true },
  { label: '🔥 3연속 출석', description: '3회 연속 경기 참가', unlocked: false },
  { label: '👟 스피드 90+', description: '스피드 능력치가 90 이상', unlocked: true },
]

function Badges() {
  return (
    <div className="mt-5">
      <h5 className="fw-bold">🏆 나의 업적 배지</h5>
      <div className="row">
        {sampleBadges.map((badge, i) => (
          <div key={i} className="col-4">
            <div className={`card text-center ${badge.unlocked ? '' : 'bg-light text-muted'}`}>
              <div className="card-body">
                <h6>{badge.label}</h6>
                <p className="small">{badge.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Badges