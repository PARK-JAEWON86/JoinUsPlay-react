// src/pages/AdminField.jsx
import React, { useState } from "react";

function AdminField() {
  const [fields, setFields] = useState([
    {
      id: 1,
      name: "서울 축구장",
      location: "서울시 강남구",
      type: "실외",
      size: "11인제",
      price: "50,000원/시간",
      status: "available",
      rating: 4.5,
    },
    {
      id: 2,
      name: "부산 스포츠센터",
      location: "부산시 해운대구",
      type: "실내",
      size: "5인제",
      price: "30,000원/시간",
      status: "maintenance",
      rating: 4.2,
    },
    {
      id: 3,
      name: "대구 축구공원",
      location: "대구시 수성구",
      type: "실외",
      size: "11인제",
      price: "40,000원/시간",
      status: "available",
      rating: 4.8,
    },
  ]);

  const [newField, setNewField] = useState({
    name: "",
    location: "",
    type: "실외",
    size: "11인제",
    price: "",
    status: "available",
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddField = (e) => {
    e.preventDefault();
    const field = {
      ...newField,
      id: Date.now(),
      rating: 0,
    };
    setFields([...fields, field]);
    setNewField({
      name: "",
      location: "",
      type: "실외",
      size: "11인제",
      price: "",
      status: "available",
    });
    setShowAddForm(false);
  };

  const handleStatusChange = (fieldId, newStatus) => {
    setFields(
      fields.map((field) =>
        field.id === fieldId ? { ...field, status: newStatus } : field
      )
    );
  };

  const handleDeleteField = (fieldId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setFields(fields.filter((field) => field.id !== fieldId));
    }
  };

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">경기장 관리</h2>

      <div className="row mb-4">
        <div className="col-md-8">
          <div className="d-flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? "취소" : "새 경기장 추가"}
            </button>
            <button className="btn btn-outline-secondary">엑셀 내보내기</button>
          </div>
        </div>
        <div className="col-md-4">
          <select className="form-select">
            <option>전체 상태</option>
            <option>이용 가능</option>
            <option>점검 중</option>
            <option>폐쇄</option>
          </select>
        </div>
      </div>

      {showAddForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">새 경기장 등록</h5>
            <form onSubmit={handleAddField}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">경기장명</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newField.name}
                      onChange={(e) =>
                        setNewField({ ...newField, name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">위치</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newField.location}
                      onChange={(e) =>
                        setNewField({ ...newField, location: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">유형</label>
                    <select
                      className="form-select"
                      value={newField.type}
                      onChange={(e) =>
                        setNewField({ ...newField, type: e.target.value })
                      }
                    >
                      <option value="실외">실외</option>
                      <option value="실내">실내</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">크기</label>
                    <select
                      className="form-select"
                      value={newField.size}
                      onChange={(e) =>
                        setNewField({ ...newField, size: e.target.value })
                      }
                    >
                      <option value="5인제">5인제</option>
                      <option value="7인제">7인제</option>
                      <option value="11인제">11인제</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">가격</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newField.price}
                      onChange={(e) =>
                        setNewField({ ...newField, price: e.target.value })
                      }
                      placeholder="예: 50,000원/시간"
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                등록
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>경기장명</th>
                  <th>위치</th>
                  <th>유형</th>
                  <th>크기</th>
                  <th>가격</th>
                  <th>상태</th>
                  <th>평점</th>
                  <th>작업</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field) => (
                  <tr key={field.id}>
                    <td>{field.id}</td>
                    <td>{field.name}</td>
                    <td>{field.location}</td>
                    <td>{field.type}</td>
                    <td>{field.size}</td>
                    <td>{field.price}</td>
                    <td>
                      <span
                        className={`badge ${
                          field.status === "available"
                            ? "bg-success"
                            : field.status === "maintenance"
                            ? "bg-warning"
                            : "bg-secondary"
                        }`}
                      >
                        {field.status === "available"
                          ? "이용 가능"
                          : field.status === "maintenance"
                          ? "점검 중"
                          : "폐쇄"}
                      </span>
                    </td>
                    <td>{field.rating}</td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() =>
                            handleStatusChange(field.id, "available")
                          }
                        >
                          활성화
                        </button>
                        <button
                          className="btn btn-outline-warning"
                          onClick={() =>
                            handleStatusChange(field.id, "maintenance")
                          }
                        >
                          점검
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDeleteField(field.id)}
                        >
                          삭제
                        </button>
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
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body text-center">
              <h5 className="card-title">전체 경기장</h5>
              <h3 className="mb-0">{fields.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body text-center">
              <h5 className="card-title">이용 가능</h5>
              <h3 className="mb-0">
                {fields.filter((f) => f.status === "available").length}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body text-center">
              <h5 className="card-title">점검 중</h5>
              <h3 className="mb-0">
                {fields.filter((f) => f.status === "maintenance").length}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white">
            <div className="card-body text-center">
              <h5 className="card-title">평균 평점</h5>
              <h3 className="mb-0">
                {(
                  fields.reduce((sum, f) => sum + f.rating, 0) / fields.length
                ).toFixed(1)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminField;
