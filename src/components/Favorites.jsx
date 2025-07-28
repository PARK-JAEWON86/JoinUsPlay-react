// src/components/Favorites.jsx
import React, { useState } from 'react'

function Favorites() {
  const [favorites, setFavorites] = useState([
    { type: '팀', name: '용산 FC', description: '주말 조기축구팀' },
    { type: '유저', name: '김철수', description: '수비 전문 플레이어' },
  ])

  return (
    <div className="mt-5">
      <h5 className="fw-bold">⭐ 찜한 팀 / 유저</h5>
      <ul className="list-group">
        {favorites.map((fav, idx) => (
          <li key={idx} className="list-group-item">
            <strong>[{fav.type}]</strong> {fav.name} - {fav.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
