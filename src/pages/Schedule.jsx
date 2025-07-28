// src/pages/Schedule.jsx
import React, { useState, useEffect } from 'react'

function Schedule() {
  const [matchInfo, setMatchInfo] = useState({
    date: '',
    time: '',
    place: '',
    type: 'friendly',
  })

  const [matchList, setMatchList] = useState([])
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState('')
  const [selectedMatch, setSelectedMatch] = useState(null)

  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || []
    setPlayers(savedPlayers)
  }, [])

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  const handleChange = (e) => {
    const { name, value } = e.target
    setMatchInfo({ ...matchInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMatch = { ...matchInfo, id: Date.now() }
    setMatchList([...matchList, newMatch])
    setMatchInfo({ date: '', time: '', place: '', type: 'friendly' })
    // TODO: 구글 캘린더 연동 API 호출 부분
    // e.g., googleCalendarAPI.addEvent(newMatch)
  }

  const toggleCheckIn = (index) => {
    const updated = [...players]
    updated[index].checkedIn = !updated[index].checkedIn
    setPlayers(updated)
  }

  const addPlayer = () => {
    if (newPlayer.trim() !== '') {
      setPlayers([...players, { name: newPlayer.trim(), checkedIn: false }])
      setNewPlayer('')
    }
  }

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">📅 매치 일정 등록 및 관리</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">날짜</label>
              <input type="date" name="date" className="form-control" value={matchInfo.date} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">시간</label>
              <input type="time" name="time" className="form-control" value={matchInfo.time} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">장소</label>
              <input type="text" name="place" className="form-control" placeholder="예: 서울 OO구장 (향후 지도 API 연동 예정)" value={matchInfo.place} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">경기 유형</label>
              <select name="type" className="form-select" value={matchInfo.type} onChange={handleChange}>
                <option value="practice">연습 경기</option>
                <option value="friendly">친선 경기</option>
                <option value="tournament">토너먼트</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">일정 등록</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card mt-4 mt-md-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">👤 참가자 출석 체크</h5>
              <div className="input-group mb-3">
                <input type="text" className="form-control" value={newPlayer} onChange={(e) => setNewPlayer(e.target.value)} placeholder="참가자 이름" />
                <button className="btn btn-outline-secondary" onClick={addPlayer}>추가</button>
              </div>
              <ul className="list-group">
                {players.map((player, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                    {player.name}
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={player.checkedIn}
                        onChange={() => toggleCheckIn(idx)}
                      />
                      <label className="form-check-label">
                        {player.checkedIn ? '출석 완료' : '미체크'}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-semibold mb-3">📌 등록된 매치 일정</h4>
        {matchList.length === 0 ? (
          <p className="text-muted">등록된 일정이 없습니다.</p>
        ) : (
          <div className="row">
            {matchList.map((m, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="card shadow-sm h-100" onClick={() => setSelectedMatch(m)} style={{ cursor: 'pointer' }}>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{m.date} {m.time}</h6>
                    <p className="card-text">📍 {m.place}</p>
                    <p className="card-text">🎮 {m.type === 'practice' ? '연습' : m.type === 'friendly' ? '친선' : '토너먼트'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedMatch && (
        <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => setSelectedMatch(null)}>
          <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">일정 상세 정보</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedMatch(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>날짜:</strong> {selectedMatch.date}</p>
                <p><strong>시간:</strong> {selectedMatch.time}</p>
                <p><strong>장소:</strong> {selectedMatch.place}</p>
                <p><strong>경기 유형:</strong> {selectedMatch.type}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedMatch(null)}>닫기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Schedule
