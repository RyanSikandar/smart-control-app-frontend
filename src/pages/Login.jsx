import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {toast} from 'react-toastify';
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
            `$http://localhost:5000/api/users/Login`,
            userData
          );
          if (response.statusText === "OK") {
            toast.success("Login Successful...");
          }
          return response.data;
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
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);

        const userData = {
            email,
            password,
          };
 
        try {
            const data = await loginUser(userData);  
            //navigate("/about"); 
            } catch (error) {
            console.log(error);
            toast.error("Login Failed ... User not found!")
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ border: '1px solid black', padding: '60px', borderRadius: '5px', width: '400px' }}>
                    <h2 className='mb-4'>Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' className='border-2' />
                        </div>
                        <div>
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' className='border-2 mt-2' />
                        </div>
                        <button type="submit" className="mt-4" style={{ backgroundColor: '#5C8D89', width: '80%' }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;