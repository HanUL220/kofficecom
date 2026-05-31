function Cafe() {
  return (
    <main className="content">
      
      {/* 🚀 빠른 이동 내비게이션 */}
      <nav className="quick-nav">
        <a href="#coffee" className="nav-chip">☕ 커피</a>
        <a href="#tea" className="nav-chip">🍵 티</a>
        <a href="#variation" className="nav-chip">🥛 베리에이션</a>
        <a href="#ade" className="nav-chip">🍹 에이드/스무디</a>
      </nav>

      {/* 안내 박스 */}
      <div className="intro-box" style={{backgroundColor: '#e6f4ea', borderColor: '#ceead6'}}>
        <span className="badge new" style={{marginBottom: '5px'}}>☕ 사내 카페</span>
        <p className="intro-text" style={{color: '#137333', marginTop: 0}}>
          사내 카페 메뉴 및 가격표입니다.<br/>
          <span style={{fontSize:'13px', fontWeight:'normal', color:'#5f6368'}}>가격 단위: 1.0 = 1,000원</span>
        </p>
      </div>

      {/* ■ 1. COFFEE */}
      <section id="coffee" className="guide-section">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <h2 className="section-title" style={{borderBottom: 'none', marginBottom: '5px'}}>COFFEE</h2>
          <span style={{fontSize: '12px', color: '#80868b', marginBottom: '10px'}}>단위: R / L</span>
        </div>
        <div className="guide-card cafe-card">
          
          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">에스프레소</span>
              <span className="badge hotice">Hot / Ice</span>
            </div>
            <div className="menu-price">1.0</div>
          </div>
          
          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">아메리카노</span>
              <span className="badge hotice">Hot / Ice</span>
            </div>
            <div className="menu-price">
              <span className="price-item">1.0</span>
              <span className="price-item">1.3</span>
            </div>
          </div>
          
          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">카페라떼</span>
              <span className="badge hotice">Hot / Ice</span>
            </div>
            <div className="menu-price">
              <span className="price-item">1.5</span>
              <span className="price-item">1.8</span>
            </div>
          </div>

          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">카페모카</span>
              <span className="badge hotice">Hot / Ice</span>
            </div>
            <div className="menu-price">1.8</div>
          </div>

          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">바닐라라떼 <span className="note">(일반/제로)</span></span>
              <span className="badge hotice">Hot / Ice</span>
            </div>
            <div className="menu-price">1.8</div>
          </div>

          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">돌체라떼</span>
              <span className="badge hotice">Hot / Ice</span>
            </div>
            <div className="menu-price">1.8</div>
          </div>

          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">콜드브루 <span className="note" style={{color:'#1a73e8'}}>Decaf +0.3</span></span>
              <span className="badge ice">Only Ice</span>
            </div>
            <div className="menu-price">1.9</div>
          </div>

          <div className="menu-row">
            <div className="menu-info">
              <span className="menu-name">콜드브루라떼 <span className="note" style={{color:'#1a73e8'}}>Decaf +0.2</span></span>
              <span className="badge ice">Only Ice</span>
            </div>
            <div className="menu-price">2.1</div>
          </div>
        </div>

        {/* 옵션 박스 */}
        <div className="guide-card" style={{backgroundColor: '#f8f9fa', border: '1px solid #dadce0'}}>
          <h3 style={{fontSize: '14px', color: '#3c4043', marginBottom: '8px'}}>Option</h3>
          <div className="menu-row" style={{border: 'none', padding: '2px 0'}}>
            <span className="menu-name" style={{fontSize: '13px', fontWeight: 'normal'}}>샷/시럽 추가</span>
            <span className="menu-price" style={{color: '#5f6368', fontSize: '13px'}}>+0.3</span>
          </div>
          <div className="menu-row" style={{border: 'none', padding: '2px 0'}}>
            <span className="menu-name" style={{fontSize: '13px', fontWeight: 'normal'}}>두유/저지방/락토프리우유 변경</span>
            <span className="menu-price" style={{color: '#5f6368', fontSize: '13px'}}>+0.3</span>
          </div>
        </div>
      </section>

      {/* ■ 2. TEA */}
      <section id="tea" className="guide-section">
        <h2 className="section-title">TEA <span style={{fontSize:'14px', color:'#137333'}}>OSULLOC / BASIC</span></h2>
        <div className="guide-card cafe-card">
          
          <div className="menu-row"><div className="menu-info"><span className="menu-name">삼다 꿀배</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">제주 삼다 영귤</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">제주 동백꽃</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">피치 캐모마일</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">세작</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">2.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">달빛걷기</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">2.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">밀키 우롱티</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">2.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">시그니처 얼그레이</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">2.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">시그니처 말차라떼</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">3.5</div></div>
          
          <div style={{borderBottom: '1px solid #dadce0', margin: '10px 0'}}></div>
          
          <div className="menu-row"><div className="menu-info"><span className="menu-name">복숭아아이스티 <span className="note">(일반/제로)</span></span><span className="badge ice">Only Ice</span></div><div className="menu-price">1.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">매실차 <span className="note">(일반/제로)</span></span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">얼박사</span><span className="badge ice">Only Ice</span></div><div className="menu-price">1.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">리치로즈티</span><span className="badge new">new</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.5</div></div>
        </div>
      </section>

      {/* ■ 3. VARIATION */}
      <section id="variation" className="guide-section">
        <h2 className="section-title">VARIATION</h2>
        <div className="guide-card cafe-card">
          <div className="menu-row"><div className="menu-info"><span className="menu-name">우유</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">1.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">미숫가루</span><span className="badge ice">Only Ice</span></div><div className="menu-price">1.8</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">밀크티라떼</span><span className="badge hotice">Hot / Ice</span></div><div className="menu-price">2.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">초코나무쑥크림라떼</span><span className="badge new">new</span><span className="badge ice">Only Ice</span></div><div className="menu-price">2.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">말차바나나라떼</span><span className="badge new">new</span><span className="badge ice">Only Ice</span></div><div className="menu-price">2.6</div></div>
        </div>
      </section>

      {/* ■ 4. ADE & SMOOTHIE */}
      <section id="ade" className="guide-section">
        <h2 className="section-title">ADE</h2>
        <div className="guide-card cafe-card" style={{marginBottom: '30px'}}>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">레몬/자몽</span><span className="badge ice">Only Ice</span></div><div className="menu-price">2.0</div></div>
        </div>

        <h2 className="section-title">SMOOTHIE & JUICE</h2>
        <div className="guide-card cafe-card">
          <div className="menu-row"><div className="menu-info"><span className="menu-name">바나나주스</span><span className="badge ice">Only Ice</span></div><div className="menu-price">2.0</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">제로 밀크쉐이크</span><span className="badge ice">Only Ice</span></div><div className="menu-price">2.4</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">블루베리요거트스무디</span><span className="badge ice">Only Ice</span></div><div className="menu-price">2.5</div></div>
          <div className="menu-row"><div className="menu-info"><span className="menu-name">말차쿠키스무디</span><span className="badge new">new</span><span className="badge ice">Only Ice</span></div><div className="menu-price">3.0</div></div>
        </div>
      </section>

    </main>
  );
}

export default Cafe;