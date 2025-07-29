// src/pages/Rank.jsx
import React, { useState } from "react";

const dummyData = [
  { name: "홍길동", winRate: 80, points: 1200, position: "FW" },
  { name: "김영희", winRate: 65, points: 950, position: "DF" },
  { name: "이철수", winRate: 72, points: 1100, position: "MF" },
  { name: "박민수", winRate: 90, points: 1350, position: "FW" },
];

function Rank() {
  const [sortBy, setSortBy] = useState("points");
  const [filter, setFilter] = useState("ALL");

  const filtered = dummyData.filter((player) =>
    filter === "ALL" ? true : player.position === filter
  );

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "winRate" ? b.winRate - a.winRate : b.points - a.points
  );

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">랭킹 리더보드</h2>

      <div className="d-flex gap-3 mb-3">
        <select
          className="form-select w-auto"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="points">포인트순</option>
          <option value="winRate">승률순</option>
        </select>

        <select
          className="form-select w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">전체 포지션</option>
          <option value="FW">FW (공격수)</option>
          <option value="MF">MF (미드필더)</option>
          <option value="DF">DF (수비수)</option>
          <option value="GK">GK (골키퍼)</option>
        </select>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>순위</th>
            <th>이름</th>
            <th>포지션</th>
            <th>승률 (%)</th>
            <th>포인트</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((player, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.winRate}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rank;
