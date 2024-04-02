import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Combine imports
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Facilities from './pages/Facilities';
import { ServiceManager } from './pages/ServiceManager';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portal" element={<ServiceManager/>}/>
          <Route path="/portal/facilities" element={<Facilities/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
