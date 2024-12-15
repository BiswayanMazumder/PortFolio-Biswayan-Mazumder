import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './Home Page/homepage';
import AboutPage from './About Page/about';
import WorkPage from './Work Page/work';
import HomePage_MobileLaptop from './Home Page/HomePage_MobileLaptop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage_MobileLaptop />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
