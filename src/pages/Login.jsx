import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ border: '1px solid black', padding: '60px', borderRadius: '5px', width: '400px' }}>
                    <h2 className='mb-4'>Login Page</h2>
                    <form onSubmit={handleSubmit}></form>
                    <div>
                        <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' className='border-2' />
                    </div>
                    <div>
                        <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' className='border-2 mt-2' />
                    </div>
                    <button type="submit" className="mt-4" style={{ backgroundColor: '#5C8D89', width: '80%' }}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;