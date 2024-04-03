import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Combine imports
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Facilities from './pages/Facilities';
import { ServiceManager } from './pages/ServiceManager';
import AddFacility from './pages/AddFacility';
import ViewFacility from './pages/ViewFacility';
import UserManagement from './pages/UserManagement';
import AddUser from './pages/AddUser';
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
          <Route path ="/portal/facilities/add" element={<AddFacility/>}/>
          <Route path="/portal/facilities/view/:id" element={<ViewFacility />} />
          <Route path="/portal/usermanagement" element = {<UserManagement/>}/>
          <Route path="/portal/usermanagement/create" element = {<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
