import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const loginUser = async (userData) => {
    try {
      const response = await axios.post(
        `https://smart-control-app-backend.vercel.app/api/users/Login`,
        userData
      );
      if (response) {
        toast.success("Login Successful...");
        return response.data;
      }
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error("Login failed... User not found!");
    }
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const data = await loginUser(userData);
      if (data) {
        // Store user data or token in local storage
        localStorage.setItem('userData', JSON.stringify(data));
        navigate('/portal');
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed ... User not found!")
    }
  };


  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f3f4f6' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', width: '400px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px', color: '#333' }}>Login Here !</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#5C8D89', color: '#fff', width: '100%', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;