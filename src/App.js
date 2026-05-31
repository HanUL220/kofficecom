import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Guide from './Guide';
import WindowsSetup from './WindowsSetup';
import GuidePaper from './GuidePaper';
import Cafe from './Cafe'; // 카페 파일 불러오기!
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="mobile-container">
        
        <header className="header">
          <Link to="/" className="home-link">
            <h1>업무 가이드</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/windows" element={<WindowsSetup />} />
          <Route path="/paper" element={<GuidePaper />} />
          <Route path="/cafe" element={<Cafe />} /> {/* 카페 길 추가! */}
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;