function GuidePaper() {
  return (
    <main className="content">
      <div className="intro-box">
        <span className="badge system">📄 안내문 동봉</span>
        <p className="intro-text">PC 불출 시 상황에 맞게 동봉해야 할 가이드 종이 목록입니다.</p>
      </div>

      <section className="guide-section" style={{ marginTop: '10px' }}>
        
        <div className="guide-card">
          <ul className="paper-list">
            <li>
              <span className="situation">1. 만기교체</span>
              <span className="paper-item">만기교체 PC 암호문</span>
            </li>
            <li>
              <span className="situation">2. 공용장비</span>
              <span className="paper-item">추가지급 로그인 안내문<br/>공용PC 도메인 추가가입 가이드</span>
            </li>
            <li>
              <span className="situation">3. 신규입사자</span>
              <span className="paper-item">신규 입사자 안내문 <span className="note">(아르바이트 포함)</span></span>
            </li>
            <li>
              <span className="situation">4. Mac (일반)</span>
              <span className="paper-item">macOS 초기설정 가이드<br/>macOS 도메인 가입</span>
            </li>
            <li>
              <span className="situation">5. Mac 복직자</span>
              <span className="paper-item">패스워드 초기화<br/>추가지급 안내문</span>
            </li>
            <li>
              <span className="situation">6. 고장교체</span>
              <span className="paper-item">추가지급 로그인 안내문</span>
            </li>
            <li>
              <span className="situation">7. 노트북 에저</span>
              <span className="paper-item">에저 로그인 가이드</span>
            </li>
            <li>
              <span className="situation">8. 외부인 / 비트락커</span>
              <span className="badge alert">가이드 종이 없음 (X)</span>
            </li>
            <li>
              <span className="situation">9. 추가지급</span>
              <span className="paper-item">추가지급 안내문</span>
            </li>
            <li>
              <span className="situation">10. 복직자</span>
              <span className="paper-item">패스워드 초기화<br/>추가지급 안내문</span>
            </li>
            <li>
              <span className="situation">11. 회의실용</span>
              <span className="paper-item">회의실 PC 가이드</span>
            </li>
            <li>
              <span className="situation">12. Mac 신규입사자</span>
              <span className="paper-item">신규 입사자 안내문</span>
            </li>
            <li>
              <span className="situation">13. 관계사 이동</span>
              <span className="paper-item">신규 입사자 안내문</span>
            </li>
            <li>
              <span className="situation">14. 직책자</span>
              <span className="paper-item">추가지급 안내문</span>
            </li>
            <li>
              <span className="situation">15. 빌드머신</span>
              <span className="paper-item">추가지급 안내문</span>
            </li>
            <li>
              <span className="situation">16. 노후화 교체</span>
              <span className="paper-item">추가지급 안내문</span>
            </li>
            <li>
              <span className="situation">17. 조기 교체</span>
              <span className="paper-item">추가지급 안내문</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default GuidePaper;