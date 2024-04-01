import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-4xl font-bold" style={{ position: 'absolute', top: '50%', left: '25%' }}>We are at your <span style={{ color: 'teal' }}>Service</span></h1>
            </div>
        </div>
    );
}

export default HomePage;