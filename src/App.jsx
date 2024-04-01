import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Combine imports
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
