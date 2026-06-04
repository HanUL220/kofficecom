import { useNavigate } from 'react-router-dom';

function Guide() {
  return (
    <main className="content">
      
      {/* 🚀 빠른 이동 내비게이션 */}
      <nav className="quick-nav">
        <a href="#sec1" className="nav-chip">1. 소모품</a>
        <a href="#sec2" className="nav-chip">2. 공용물품</a>
        <a href="#sec3" className="nav-chip">3. 직책자기기</a>
        <a href="#sec4" className="nav-chip">4. PC입고</a>
        <a href="#sec5" className="nav-chip">5. 모바일기기</a>
      </nav>

      {/* 공통 첫인사 */}
      <div className="intro-box">
        <span className="badge speak">🗣️ 공통 첫인사</span>
        <p className="intro-text">"안녕하세요! 어떤 일로 오셨을까요?"</p>
      </div>

      {/* ■ 1. 소모품 처리 */}
      <section id="sec1" className="guide-section">
        <h2 className="section-title">■ 1. 소모품 처리</h2>
        
        <div className="guide-card">
          <h3>[건전지 / 멀티탭 / 육각렌치]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "어떤 용도로 필요하신지 사유를 알 수 있을까요?"</li>
            <li><span className="badge action">행 동</span> 사유 확인 후, 사내 자산에 사용하는 경우에 한해 지원 <span className="note">(※ 건전지 종류: AA, AAA, CR2032)</span></li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[케이블류 교체 (DP, HDMI, LAN, 파워, USB 연장 등)]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "어떤 용도로 필요하신지 사유를 알 수 있을까요?"</li>
            <li><span className="badge action">행 동</span> 1대1 교체 지원 원칙 <span className="note">(※ 교체 시 고장 여부 즉시 확인 필요)</span></li>
            <li><span className="badge warn">안 내</span> 모니터가 사내(NK) 자산일 경우에만 케이블 지원 가능 (개인 자산에는 지원 불가)</li>
          </ul>
        </div>

        {/* 수정된 부분: 입력장치 사유 묻기 추가 */}
        <div className="guide-card">
          <h3>[입력장치 교체 (마우스, 마우스패드, 키보드, 와콤 펜심)]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "어떤 용도로 필요하신지 사유를 알 수 있을까요?"</li>
            <li><span className="badge action">행 동</span> 1대1 교체 지원 원칙 <span className="note">(※ 교체 시 고장 여부 즉시 확인 필요)</span></li>
            <li><span className="badge system">전 산</span> 기존에 지급받은 사내 물품이 있는지 확인 <span className="note">(※ 개인 물품을 사용하다 고장나서 교체하러 오는 경우 방지)</span></li>
            <li><span className="badge speak">말하기</span> 기존 물품을 분실하셨다고 할 경우, 분실 방지 관련 안내 진행</li>
          </ul>
        </div>

        {/* 수정된 부분: 젠더류 사유 묻기 추가 */}
        <div className="guide-card">
          <h3>[젠더류 교체 (USB to LAN, USB TYPE-C)]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "어떤 용도로 필요하신지 사유를 알 수 있을까요?"</li>
            <li><span className="badge action">확 인</span> 사용하려는 노트북이 메인 장비인지 확인 후 교체 지원 <span className="note">(※ 공용장비, 추가장비는 지원 불가 / Azure 설치)</span></li>
            <li><span className="badge speak">안 내</span> 교체 지원 시 맥(Mac) 등록 안내 필요</li>
            <li>
              <span className="badge system">전 산</span> 웹오피스포털 - NCSR을 통해 직접 신청하도록 안내
              <div className="sub-bullet"><span className="badge warn">참 고</span> 1달 동안 미사용 시 재신청이 필요할 수 있음을 안내</div>
            </li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[가구 및 비품 (받침대/쿠션, 옷걸이, 헤드레스트)]</h3>
          <ul>
            <li><span className="badge action">확 인</span> 업무요청게시판을 통해 사전 안내를 받고 방문하신 경우에 지원 <span className="note">(※ 모니터/발 받침대, 발 받침대 쿠션 등)</span></li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[박스테이프]</h3>
          <ul>
            <li><span className="badge action">행 동</span> 임시 사용 목적으로 대여하시는 경우가 대부분이므로, 지급 형태와 무관하게 지원</li>
          </ul>
        </div>
      </section>

      {/* ■ 2. 공용 물품 대여 및 반납 */}
      <section id="sec2" className="guide-section">
        <h2 className="section-title">■ 2. 공용 물품 대여 및 반납</h2>
        
        <div className="guide-card">
          <h3>[카트 대여]</h3>
          <ul>
            <li>
              <span className="badge speak">말하기</span> "어떤 일로 필요하실까요?"
              <div className="sub-bullet">
                • 이사 목적일 경우 <span className="badge speak">안내</span> "이사하시는 거면 '문서 수발실'을 먼저 이용해 보시겠어요?"
              </div>
              <div className="sub-bullet">
                • 단순 이동일 경우 <span className="badge speak">안내</span> "네, 대여 도와드리겠습니다."
              </div>
            </li>
            <li><span className="badge system">전 산</span> [공용물품대여 엑셀]에 정보 입력 후, 임직원에게 [팀명/성함] 작성 요청</li>
            <li><span className="badge action">행 동</span> 카트 가져와서 인계</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[윈도우 USB 대여]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "여기에 팀명과 이름 작성 부탁드립니다."</li>
            <li><span className="badge speak">말하기</span> "대여 기간은 최대 1주인데, 현재 재고가 많이 부족해서 다 사용하시면 기한 전이라도 바로 반납 부탁드립니다."</li>
            <li><span className="badge action">행 동</span> 윈도우 가이드와 함께 USB 대여</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[임직원용 노트북 대여]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "성함이 어떻게 되시나요?"</li>
            <li><span className="badge system">전 산</span> 사내 이메일에서 이름 또는 "임직원용 노트북" 검색 후 신청 내역 확인</li>
            <li><span className="badge system">전 산</span> 품목 노트북 숫자 및 반납 기간 확인</li>
            <li><span className="badge speak">말하기</span> "여기에 팀명과 성함 작성 부탁드립니다."</li>
            <li><span className="badge action">행 동</span> 대여할 기기 꺼내서 자산번호 스캔할 준비</li>
            <li><span className="badge speak">말하기</span> "반납 기한이 OO까지인데 이때 반납 가능하신가요? 만약 반납일에 못 오시면, 꼭 다음날 오전 9시 30분까지는 반납 부탁드립니다."</li>
            <li><span className="badge system">전 산</span> [공용물품대여 엑셀]에 대여 내역 작성 후 [팀명/이름] 작성 요청</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[임직원용 노트북 반납]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "와이핑 작업으로 인해 데이터 복구가 불가능합니다. 괜찮으실까요?"</li>
            <li><span className="badge speak">말하기</span> (괜찮다고 하면) "기기 확인하겠습니다. 잠시만 기다려주시겠어요?"</li>
            <li><span className="badge action">행 동</span> 기기 전원 켜서 이상 유무 확인 및 구성품(기기, 마우스, 안내책자, 충전기) 확인</li>
            <li><span className="badge warn">누 락</span> "OO도 같이 반납해 주셔야 합니다. 한번 자리에서 찾아보시고 연락 부탁드립니다."</li>
            <li><span className="badge alert">🚨보상</span> 개인적으로 구매해서 반납하도록 안내</li>
            <li><span className="badge system">전 산</span> [공용물품대여 엑셀]에 반납 처리 후 [팀명/이름] 작성 요청</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[차량 대여]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "성함이 어떻게 되시나요?"</li>
            <li><span className="badge system">전 산</span> 사내 이메일에서 이름 또는 "차량 대여" 검색하여 승인 내역 확인 (제목에 기간 확인)</li>
            <li>
              <span className="badge speak">말하기</span> "반납 날짜가 OO일이 맞으실까요? 반납 당일 몇 시쯤 반납 예정이실까요?"
              <div className="sub-bullet">
                • 저녁 6시 반 이후 반납 시 <span className="badge speak">안내</span> "6시 반 이후에 끝나시는 경우, 다음날 오전 9시 30분부터 저희 운영 시간이라 그때 반납 부탁드립니다."
              </div>
            </li>
            <li><span className="badge system">전 산</span> [차량 대여 엑셀]에 내역 기입 후 [팀명/성함] 작성 요청</li>
            <li><span className="badge action">행 동</span> 차량 가이드와 차키 꺼내기</li>
            <li><span className="badge speak">말하기</span> "차량 확인하러 같이 가시죠. 저랑 같이 차량 상태랑 키로수(km) 확인 부탁드리겠습니다."</li>
            <li><span className="badge speak">말하기</span> "반납하실 때 연료가 50% 이상 남아있는지 확인해 주시고, 차량 내부 쓰레기 수거랑 개인 소지품도 꼭 확인 부탁드립니다."</li>
            <li><span className="badge action">행 동</span> 차량 가이드 전달하며 <span className="badge speak">말하기</span> "반납하실 때 이 가이드 북 작성하셔서 차키랑 같이 반납해 주세요."</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[차량 반납]</h3>
          <ul>
            <li><span className="badge action">행 동</span> 차량 가이드와 차키 받기</li>
            <li><span className="badge speak">말하기</span> "같이 이동해서 차량 상태 확인하겠습니다."</li>
            <li><span className="badge action">행 동</span> 주차장 나가서 차량 외관 상태 및 계기판 km수 확인 (가이드북에 적힌 반납 km와 일치하는지 확인)</li>
            <li><span className="badge action">행 동</span> 차량 가이드북이 누락 없이 다 작성되었는지 확인</li>
            <li><span className="badge speak">말하기</span> "반납 완료되었습니다. 감사합니다!" 인사</li>
            <li><span className="badge system">전 산</span> 자리로 돌아와 [차량 대여 엑셀]에 [반납 km]와 [반납 담당자] 기입</li>
          </ul>
        </div>
      </section>

      {/* ■ 3. 직책자 디바이스 (자급제) */}
      <section id="sec3" className="guide-section">
        <h2 className="section-title">■ 3. 직책자 디바이스 (자급제)</h2>
        <div className="guide-card">
          <ul>
            <li><span className="badge speak">말하기</span> "성함이 어떻게 되시나요?"</li>
            <li><span className="badge system">전 산</span> [직책자 디바이스 엑셀]에 관련 정보 모두 기입</li>
            <li><span className="badge action">행 동</span> 뒤쪽 보관함에서 해당 기기 꺼내오기</li>
            <li><span className="badge action">행 동</span> 기기 전달하며 <span className="badge speak">말하기</span> "수령하시는 사양 확인하시고 수령해가시면 됩니다."</li>
          </ul>
        </div>
      </section>

      {/* ■ 4. PC류 입고 (반납) */}
      <section id="sec4" className="guide-section">
        <h2 className="section-title">■ 4. PC류 입고 (반납)</h2>
        
        <div className="guide-card">
          <h3>[일반 PC/모니터류 입고]</h3>
          <ul>
            <li><span className="badge action">행 동</span> 물건 받기</li>
            <li><span className="badge speak">말하기</span> "성함이 어떻게 되시나요?"</li>
            <li><span className="badge system">전 산</span> 이메일 시스템에서 검색 후 "신청부서"와 "신청자" 정보 복사</li>
            <li><span className="badge system">전 산</span> [입출고 관리대장]의 'PC 입고' 탭에 복사한 정보 붙여넣기</li>
            <li><span className="badge action">행 동</span> 기기 자산번호 바코드 찍고, 품목 및 모델명 작성</li>
            <li><span className="badge system">전 산</span> '나이스(NEIS)' 시스템에서 자산번호 검색</li>
            <li><span className="badge system">전 산</span> [자산장비 지급반납확인서 엑셀] 파일에 구분/사유/모델명/자산번호 최종 기입</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[PC 소모품 미사용 반납]</h3>
          <ul>
            <li><span className="badge action">행 동</span> 물건 받으며 <span className="badge speak">말하기</span> "PC 소모품 같은 경우는 따로 자산번호를 관리하고 있지 않아서, 바로 확인 후 반납 처리해 드리겠습니다."</li>
          </ul>
        </div>
      </section>

      {/* ■ 5. 모바일 기기 대여 및 반납 */}
      <section id="sec5" className="guide-section">
        <h2 className="section-title">■ 5. 모바일 기기 대여 및 반납</h2>
        
        <div className="guide-card">
          <h3>[모바일 기기 대여]</h3>
          <ul>
            <li><span className="badge speak">말하기</span> "성함이 어떻게 되시나요? 혹시 충전기도 필요하신가요?"</li>
            <li><span className="badge speak">말하기</span> "충전기 먼저 상태 확인하고 대여해 드리겠습니다."</li>
            <li><span className="badge system">전 산</span> [전자결재 - 모바일대여신청관리] 페이지 접속</li>
            <li><span className="badge system">전 산</span> 기기 자산번호 검색하여 확인 후 [대여 시작] 버튼 클릭</li>
            <li><span className="badge action">행 동</span> 기본 구성품 외에 추가 액세서리가 있다면 대장에 따로 기록</li>
            <li><span className="badge action">행 동</span> 기기 전달하며 <span className="badge speak">말하기</span> "확인되셨습니다. 감사합니다!"</li>
          </ul>
        </div>

        <div className="guide-card">
          <h3>[모바일 기기 반납]</h3>
          <ul>
            <li><span className="badge action">행 동</span> 물건 받으면서 <span className="badge speak">말하기</span> "계정 로그아웃이랑 초기화는 완료 하셨을까요? 성함이 어떻게 되시나요?"</li>
            <li><span className="badge action">행 동</span> 기기 자산번호 바코드 스캔</li>
            <li><span className="badge system">전 산</span> 해당 신청 내역에서 신청부서 및 신청자 정보 복사하여 관리대장에 붙여넣기</li>
            <li>
              <span className="badge action">행 동</span> 대여 당시 같이 지급했던 액세서리가 다 있는지 확인
              <div className="sub-bullet">
                • 누락 시 <span className="badge speak">말하기</span> "대여하셨을 때 OO도 같이 대여하셨는데 가져오셨을까요? 자리에 있는지 한번 확인해 보셔야 할 것 같습니다."
              </div>
              <div className="sub-bullet">
                • 최종 분실 시 <span className="badge alert">안내</span> 개인적으로 동일 제품 구매해서 반납하도록 안내
              </div>
            </li>
            <li><span className="badge speak">말하기</span> "네, 반납 완료되셨습니다." 인사</li>
            <li><span className="badge action">행 동</span> 기기 내부 구동하여 초기화 완료 및 OS 업데이트가 꺼져 있는지 최종 확인</li>
            <li><span className="badge system">전 산</span> 전산 상에서 전자결재 상태를 [반납]으로 최종 변경</li>
          </ul>
        </div>
      </section>

    </main>
  );
}

export default Guide;