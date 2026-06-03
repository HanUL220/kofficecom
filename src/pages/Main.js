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
          <div className="menu-icon" style={{backgroundColor: '#f1f3f5'}}>💬</div>
          <div className="menu-text">
            <h3>임직원 응대 매뉴얼</h3>
            <p>상황별 스크립트 및 처리 방법</p>
          </div>
        </div>

        <div className="menu-card" onClick={() => navigate('/windows')}>
          <div className="menu-icon" style={{backgroundColor: '#e6fcf5'}}>💻</div>
          <div className="menu-text">
            <h3>PC / 노트북 셋팅 가이드</h3>
            <p>OS 설치 및 도메인 가입 순서</p>
          </div>
        </div>

        <div className="menu-card" onClick={() => navigate('/paper')}>
          <div className="menu-icon" style={{backgroundColor: '#f3f0ff'}}>📄</div>
          <div className="menu-text">
            <h3>동봉 안내문 목록</h3>
            <p>기기 불출 시 함께 지급할 안내 가이드</p>
          </div>
        </div>

        <div className="menu-card" onClick={() => navigate('/cafe')}>
          <div className="menu-icon" style={{backgroundColor: '#fff3cd'}}>☕</div>
          <div className="menu-text">
            <h3>사내 카페 메뉴</h3>
            <p>커피 및 음료 가격표 확인</p>
          </div>
        </div>

        {/* 새로 추가된 노트북 대여 메뉴 카드 */}
        <div className="menu-card" onClick={() => navigate('/notebook')}>
          <div className="menu-icon" style={{backgroundColor: '#e3f2fd'}}>📋</div>
          <div className="menu-text">
            <h3>임직원 노트북 대여</h3>
            <p>대여 현황 조회 및 등록/반납 관리</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Main;