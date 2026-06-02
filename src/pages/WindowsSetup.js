import { useNavigate } from 'react-router-dom';

function WindowsSetup() {
  return (
    <main className="content">

      {/* 🚀 빠른 이동 내비게이션 */}
      <nav className="quick-nav">
        <a href="#win1" className="nav-chip">1. 셋팅 종류</a>
        <a href="#win2" className="nav-chip">2. 셋팅 순서(데스크탑)</a>
        <a href="#win3" className="nav-chip">3. 노트북 Azure AD</a>
      </nav>

      {/* 안내 박스 */}
      <div className="intro-box">
        <span className="badge system">💻 PC/노트북</span>
        <p className="intro-text">사내 PC 및 노트북 셋팅 가이드입니다.</p>
      </div>

      {/* ■ 1. 셋팅 (종류) */}
      <section id="win1" className="guide-section">
        <h2 className="section-title">■ 1. 셋팅 종류</h2>
        <div className="guide-card">
          <ul>
            <li><span className="badge system">A</span> <b>도메인 가입 셋팅</b></li>
            <li><span className="badge system">B</span> <b>노트북 공용 셋팅</b> (Entra ID)</li>
            <li>
              <span className="badge system">C</span> <b>로컬셋팅</b> (도메인 가입 X)
              <div className="sub-bullet">→ 애매한 경우 확인하고 진행</div>
            </li>
            <li>
              <span className="badge warn">D</span> <b>폐쇄망 PC</b>
              <div className="sub-bullet">→ 사용안함, 정책에서 사라짐</div>
            </li>
          </ul>
        </div>
      </section>

      {/* ■ 2. 셋팅 순서 (데스크탑 기준) - 수정된 부분 */}
      <section id="win2" className="guide-section">
        <h2 className="section-title">■ 2. 셋팅 순서 <span style={{ fontSize: '14px', color: '#1a73e8' }}>(데스크탑 기준)</span></h2>

        <div className="guide-card">
          <ul>
            <li>
              <span className="badge action">Step 1</span> OS 설치 <span className="note">&lt;Enterprise&gt;</span>
            </li>

            <li>
              <span className="badge action">Step 2</span> MAC 확인 → 등록요청 → 등록확인
              <div className="sub-bullet">
                • <b>셋팅정보 확인:</b> CPU, 사용자이름, 자산번호, 상세 스펙, 저장매체 S/N, MAC
              </div>
            </li>

            <li>
              <span className="badge action">Step 3</span> 프로그램 설치
              <div className="sub-bullet">• k-driver</div>
              <div className="sub-bullet">• ODT (Office 365)</div>
              <div className="sub-bullet">• 보안프로그램 (DLP, EDR)</div>
              <div className="sub-bullet">• NEXON 인증서</div>
            </li>

            <li>
              <span className="badge action">Step 4</span> 외부 인터넷 확인
              <div className="sub-bullet">• 웹 브라우저 실행 후 www.naver.com 접속 정상 여부 확인</div>
            </li>

            <li>
              <span className="badge action">Step 5</span> 윈도우 설정 셋팅
              <div className="sub-bullet">• 정품인증 및 윈도우 업데이트 진행</div>
              <div className="sub-bullet">• 배경화면 기본으로 설정</div>
              <div className="sub-bullet">• PC 이름 변경 (자산번호로 설정)</div>
            </li>

            <li>
              <span className="badge action">Step 6</span> 도메인 가입
              <div className="sub-bullet">• <b>경로:</b> 도메인 또는 작업 그룹 → 변경 → 도메인 (nexon.corp) 입력 후 확인</div>
              <div className="sub-bullet">• <b>인증:</b> 계정(asap_admin) / 셋팅방PC 비번 입력 → 완료</div>
              <div className="sub-bullet">• <b>확인:</b> 장치이름이 '자산번호 nexon.corp'로 변경되었는지 확인</div>
            </li>

            <li>
              <span className="badge action">Step 7</span> 사용자 추가
              <div className="sub-bullet">• <b>경로:</b> 컴퓨터관리 → 로컬사용자 및 그룹 → 그룹 → Administrators → 추가</div>
              <div className="sub-bullet">• <b>입력:</b> 빈칸에 임직원 성함 또는 계정 입력</div>
              <div className="sub-bullet">• <b>인증:</b> 계정(asap_admin) / 셋팅방PC 비번 입력 → 적용 → 확인</div>
            </li>
          </ul>

          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fef7e0', borderRadius: '8px', fontSize: '13px' }}>
            <span className="badge warn">오류시 참고</span> NX-123456-PC01 형태로 변경
          </div>

        </div>
      </section>

      {/* ■ 3. 노트북 Azure AD 셋팅 */}
      <section id="win3" className="guide-section">
        <h2 className="section-title">■ 3. 노트북 Azure AD 셋팅</h2>

        <div className="guide-card">
          <ul>
            <li><span className="badge action">Step 1</span> OS 설치</li>
            <li><span className="badge action">Step 2</span> 윈도우 업데이트 확인</li>

            <li>
              <span className="badge action">Step 3</span> 해당 브랜드 업데이트 프로그램 실행
              <div className="sub-bullet">• 삼성: 삼성 디바이스 케어</div>
              <div className="sub-bullet">• LG: 엘지 업데이트</div>
              <div className="sub-bullet">• 레노버: 레노버 밴티지</div>
            </li>

            <li><span className="badge action">Step 4</span> Office 365</li>
            <li><span className="badge action">Step 5</span> 정품인증</li>
            <li><span className="badge action">Step 6</span> 보안프로그램</li>
            <li><span className="badge action">Step 7</span> 셋팅정보 확인</li>

            <li>
              <span className="badge action">Step 8</span> Azure AD 패스워드 설정
              <div className="sub-bullet"><span className="badge warn">확인</span> nexon!1234</div>
            </li>

            <li>
              <span className="badge action">Step 9</span> 사용자추가
              <div className="sub-bullet"><span className="badge system">계정</span> - @nexon.co.kr</div>
            </li>

            <li><span className="badge action">Step 10</span> 셋팅정보 확인</li>
            <li><span className="badge action">Step 11</span> PC이름변경 <span className="note">(도메인-) = 자산번호</span></li>
            <li><span className="badge action">Step 12</span> 와이파이 정보 삭제</li>
          </ul>

          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fef7e0', borderRadius: '8px', fontSize: '13px' }}>
            <span className="badge warn">오류시 참고</span> NX-123456-NT01 형태로 변경
          </div>
        </div>
      </section>

    </main>
  );
}

export default WindowsSetup;