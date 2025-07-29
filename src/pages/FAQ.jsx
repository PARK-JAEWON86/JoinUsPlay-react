// src/pages/FAQ.jsx
import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "JoinUs Play는 어떤 서비스인가요?",
      answer:
        "JoinUs Play는 축구 애호가들이 팀을 만들고, 경기를 일정 잡고, 함께 뛸 수 있는 소셜 축구 플랫폼입니다. AI로 나만의 선수 카드를 만들고, 팀원을 모집하여 실제 경기를 할 수 있습니다.",
    },
    {
      question: "무료로 사용할 수 있나요?",
      answer:
        "네, 기본 기능은 모두 무료로 사용할 수 있습니다. 프리미엄 기능을 원하시면 유료 플랜을 구독하실 수 있습니다.",
    },
    {
      question: "팀을 어떻게 만들 수 있나요?",
      answer:
        "팀 페이지에서 팀 이름, 슬로건, 로고를 설정하고 포지션별로 모집 인원을 설정하면 됩니다. 생성된 팀 링크를 공유하여 팀원을 모집할 수 있습니다.",
    },
    {
      question: "경기 일정은 어떻게 잡나요?",
      answer:
        "일정 페이지에서 날짜, 시간, 장소, 경기 유형을 선택하여 매치를 등록할 수 있습니다. 참가자들의 출석 체크도 함께 관리할 수 있습니다.",
    },
    {
      question: "선수 카드는 어떻게 만들어지나요?",
      answer:
        "내 카드 페이지에서 이름, 포지션, 능력치(속도, 패스, 드리블, 수비)를 설정하면 FIFA 스타일의 나만의 선수 카드가 생성됩니다.",
    },
    {
      question: "랭킹은 어떻게 계산되나요?",
      answer:
        "경기 결과, 승률, 참여도 등을 종합하여 개인 및 팀 랭킹이 계산됩니다. 정기적으로 업데이트됩니다.",
    },
    {
      question: "문제가 발생했을 때 어떻게 신고하나요?",
      answer:
        "신고 페이지에서 신고 유형을 선택하고 구체적인 상황을 설명해 주시면 24시간 내에 검토 결과를 알려드립니다.",
    },
    {
      question: "계정 설정은 어디서 변경할 수 있나요?",
      answer:
        "설정 페이지에서 알림, 언어, 선호 포지션, 프로필 공개 여부 등을 변경할 수 있습니다.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h2 className="fw-bold mb-4 text-center">자주 묻는 질문</h2>
      <p className="text-center text-muted mb-5">궁금한 점을 찾아보세요</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h5 className="card-title">추가 문의사항</h5>
              <p className="card-text">
                위에서 답변을 찾지 못하셨나요? 언제든지 문의해 주세요.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <h6>이메일</h6>
                  <p className="text-muted">support@joinus.play</p>
                </div>
                <div className="col-md-4">
                  <h6>채팅</h6>
                  <p className="text-muted">실시간 상담</p>
                </div>
                <div className="col-md-4">
                  <h6>앱 내 문의</h6>
                  <p className="text-muted">설정 &gt; 문의하기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
