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
import Allotments from './pages/Allotments';
import AddAllotment from './pages/AddAllotment';
import ViewAllotment from './pages/ViewAllotment';
import Complains from './pages/Complains';
import AssignComplains from './pages/AssignComplains';
import ViewComplains from './pages/ViewComplains';
import RespondComplains from './pages/RespondComplains';
import { ToastContainer } from 'react-toastify';
import ResolveComplains from './pages/ResolveComplains';
import NotFound from './pages/NotFound';
import AddComplain from './pages/AddComplain';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portal" element={<ServiceManager />} />
          <Route path="/portal/facilities" element={<Facilities />} />
          <Route path="/portal/facilities/add" element={<AddFacility />} />
          <Route path="/portal/facilities/view/:id" element={<ViewFacility />} />
          <Route path="/portal/usermanagement" element={<UserManagement />} />
          <Route path="/portal/usermanagement/create" element={<AddUser />} />
          <Route path="/portal/allotments" element={<Allotments />} />
          <Route path="/portal/allotments/create" element={<AddAllotment />} />
          <Route path="/portal/allotments/view/:id" element={<ViewAllotment />} />
          <Route path="/portal/complains" element={<Complains />} />
          <Route path="/portal/complains/assign/:id" element={<AssignComplains />} />
          <Route path="/portal/complains/view/:id" element={<ViewComplains />} />
          <Route path="/portal/complains/respond/:id" element={<RespondComplains />} />
          <Route path="/portal/complains/resolve/:id" element={<ResolveComplains />} />
          <Route path="/portal/complains/addComplain" element={<AddComplain />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
