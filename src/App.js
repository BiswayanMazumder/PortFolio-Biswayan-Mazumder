import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './Home Page/homepage';
import Entrypage from './Home Page/Entrypage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Entrypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
