// src/pages/Review.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Review() {
  const { matchId } = useParams();
  const [review, setReview] = useState({
    rating: 5,
    title: "",
    content: "",
    highlights: "",
    improvements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("후기 제출:", review);
    alert("후기가 작성되었습니다!");
    // TODO: 서버에 후기 저장
  };

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">경기 후기 작성</h2>
      <p className="text-muted mb-4">매치 ID: {matchId}</p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">평점</label>
                  <select
                    name="rating"
                    className="form-select"
                    value={review.rating}
                    onChange={handleChange}
                  >
                    <option value="5">5점 - 매우 만족</option>
                    <option value="4">4점 - 만족</option>
                    <option value="3">3점 - 보통</option>
                    <option value="2">2점 - 불만족</option>
                    <option value="1">1점 - 매우 불만족</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">제목</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={review.title}
                    onChange={handleChange}
                    placeholder="후기 제목을 입력하세요"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">상세 내용</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    name="content"
                    value={review.content}
                    onChange={handleChange}
                    placeholder="경기에 대한 상세한 후기를 작성해주세요..."
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">하이라이트</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="highlights"
                    value={review.highlights}
                    onChange={handleChange}
                    placeholder="이번 경기의 하이라이트를 작성해주세요"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">개선점</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="improvements"
                    value={review.improvements}
                    onChange={handleChange}
                    placeholder="다음 경기에서 개선하고 싶은 점을 작성해주세요"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  후기 작성 완료
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">후기 작성 가이드</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✅ 구체적인 상황 설명</li>
                  <li className="mb-2">✅ 건설적인 피드백</li>
                  <li className="mb-2">✅ 팀워크와 협력 강조</li>
                  <li className="mb-2">❌ 개인 비판 금지</li>
                </ul>
                <p className="text-muted small">
                  후기는 다른 팀원들과 공유되어 서로의 발전에 도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Review;
