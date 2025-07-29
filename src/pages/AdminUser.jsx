// src/pages/AdminUser.jsx
import React, { useState } from "react";

function AdminUser() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "홍길동",
      email: "hong@example.com",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2024-01-20",
      matches: 12,
    },
    {
      id: 2,
      name: "김영희",
      email: "kim@example.com",
      status: "active",
      joinDate: "2024-01-10",
      lastLogin: "2024-01-19",
      matches: 8,
    },
    {
      id: 3,
      name: "이철수",
      email: "lee@example.com",
      status: "suspended",
      joinDate: "2024-01-05",
      lastLogin: "2024-01-15",
      matches: 5,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleStatusChange = (userId, newStatus) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">사용자 관리</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="이름 또는 이메일로 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">전체 상태</option>
            <option value="active">활성</option>
            <option value="suspended">정지</option>
            <option value="inactive">비활성</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100">새 사용자 추가</button>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>상태</th>
                  <th>가입일</th>
                  <th>최근 로그인</th>
                  <th>경기 수</th>
                  <th>작업</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.status === "active"
                            ? "bg-success"
                            : user.status === "suspended"
                            ? "bg-warning"
                            : "bg-secondary"
                        }`}
                      >
                        {user.status === "active"
                          ? "활성"
                          : user.status === "suspended"
                          ? "정지"
                          : "비활성"}
                      </span>
                    </td>
                    <td>{user.joinDate}</td>
                    <td>{user.lastLogin}</td>
                    <td>{user.matches}</td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => handleStatusChange(user.id, "active")}
                        >
                          활성화
                        </button>
                        <button
                          className="btn btn-outline-warning"
                          onClick={() =>
                            handleStatusChange(user.id, "suspended")
                          }
                        >
                          정지
                        </button>
                        <button className="btn btn-outline-danger">삭제</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body text-center">
              <h5 className="card-title">전체 사용자</h5>
              <h3 className="mb-0">{users.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body text-center">
              <h5 className="card-title">활성 사용자</h5>
              <h3 className="mb-0">
                {users.filter((u) => u.status === "active").length}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-white">
            <div className="card-body text-center">
              <h5 className="card-title">정지된 사용자</h5>
              <h3 className="mb-0">
                {users.filter((u) => u.status === "suspended").length}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
