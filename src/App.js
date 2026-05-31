import { useState, useEffect } from 'react'; // useState, useEffect 추가
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Guide from './pages/Guide';
import WindowsSetup from './pages/WindowsSetup';
import GuidePaper from './pages/GuidePaper';
import Cafe from './pages/Cafe';
import './App.css';

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHideHeader(true); // 스크롤 내리면 숨김
      } else {
        setHideHeader(false); // 올리면 나타남
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="mobile-container">
        
        {/* 헤더 이름 수정: 업무 가이드 -> ASAP 업무 가이드 */}
        <header className={`header ${hideHeader ? 'hidden' : ''}`}>
          <Link to="/" className="home-link">
            <h1>ASAP 업무 가이드1</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/windows" element={<WindowsSetup />} />
          <Route path="/paper" element={<GuidePaper />} />
          <Route path="/cafe" element={<Cafe />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;