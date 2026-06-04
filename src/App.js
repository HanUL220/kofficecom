import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Guide from './pages/Guide';
import WindowsSetup from './pages/WindowsSetup';
import GuidePaper from './pages/GuidePaper';
import Cafe from './pages/Cafe';
import NotebookRental from './pages/NotebookRental'; // 노트북 페이지 불러오기
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="mobile-container">
        
        {/* 상단 헤더 */}
        <header className={`header ${hideHeader ? 'hidden' : ''}`}>
          <Link to="/" className="home-link">
            <h1>ASAP 업무 가이드</h1>
          </Link>
        </header>

        {/* 페이지 라우팅 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/windows" element={<WindowsSetup />} />
          <Route path="/paper" element={<GuidePaper />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/notebook" element={<NotebookRental />} /> {/* 노트북 페이지 경로 추가 */}
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;