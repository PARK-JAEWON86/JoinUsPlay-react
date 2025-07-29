// src/components/Chat.jsx
import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { user: "나", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="card mt-5">
      <div className="card-header fw-bold">팀 채팅방</div>
      <div
        className="card-body"
        style={{ height: "200px", overflowY: "auto", background: "#f9f9f9" }}
      >
        {messages.length === 0 ? (
          <p className="text-muted">아직 메시지가 없습니다.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="mb-2">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))
        )}
      </div>
      <form className="card-footer d-flex" onSubmit={handleSend}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="메시지를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          전송
        </button>
      </form>
    </div>
  );
}

export default Chat;
