import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import "../Styles/HomePage.css";

const HomePage = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const words = "We are at your Service";

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < words.length) {
                setText((prevText) => prevText + words[index]);
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval); // Stop the interval once all characters are displayed
            }
        }, 150);

        return () => clearInterval(interval); // Clean up on unmount
    }, [index]);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center h-screen justify-center">
                <h1 className="text-4xl font-bold"
                    style={{ color: '#5C8D89' }}>
                    {text}
                    <span className="typing-cursor"></span>
                </h1>
            </div>
        </div>
    );
}

export default HomePage;
