// src/components/PositionSuggest.jsx
import React from 'react'

function PositionSuggest({ stats }) {
  // 간단한 로직 예시: 속도/패스/수비 점수를 기반으로 추천 포지션
  const recommend = () => {
    if (stats.speed > stats.defense && stats.speed > stats.pass) return 'FW (공격수)'
    if (stats.pass > stats.speed && stats.pass > stats.defense) return 'MF (미드필더)'
    if (stats.defense > stats.pass && stats.defense > stats.speed) return 'DF (수비수)'
    return 'GK (골키퍼)' // 기본값 또는 추가 로직 가능
  }

  return (
    <div className="alert alert-info mt-4">
      🤖 AI 추천 포지션: <strong>{recommend()}</strong>
    </div>
  )
}

export default PositionSuggest
