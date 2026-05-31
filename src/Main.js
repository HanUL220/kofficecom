import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <main className="content">
      
      <div className="main-header">
        <h2>환영합니다! 👋</h2>
        <p>원하시는 업무 메뉴를 선택해 주세요.</p>
      </div>

      <div className="menu-grid">
        
        <div className="menu-card" onClick={() => navigate('/guide')}>
          <div className="menu-icon" style={{backgroundColor: '#e8f0fe'}}>💬</div>
          <div className="menu-text">
            <h3>임직원 응대 매뉴얼</h3>
            <p>상황별 스크립트 및 처리 방법</p>
          </div>
        </div>

        <div className="menu-card" onClick={() => navigate('/windows')}>
          <div className="menu-icon" style={{backgroundColor: '#f3e8fd'}}>💻</div>
          <div className="menu-text">
            <h3>PC / 노트북 셋팅 가이드</h3>
            <p>OS 설치 및 도메인 가입 순서</p>
          </div>
        </div>

        <div className="menu-card" onClick={() => navigate('/paper')}>
          <div className="menu-icon" style={{backgroundColor: '#e6f4ea'}}>📄</div>
          <div className="menu-text">
            <h3>동봉 안내문 목록</h3>
            <p>기기 불출 시 함께 지급할 안내 가이드</p>
          </div>
        </div>

        {/* ☕ 새로 추가된 사내 카페 버튼! */}
        <div className="menu-card" onClick={() => navigate('/cafe')}>
          <div className="menu-icon" style={{backgroundColor: '#fef7e0'}}>☕</div>
          <div className="menu-text">
            <h3>사내 카페 메뉴</h3>
            <p>커피 및 음료 가격표 확인</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Main;