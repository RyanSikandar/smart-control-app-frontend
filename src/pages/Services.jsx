import React from 'react';
import Navbar from '../components/Navbar';
import { CardActionArea } from '@mui/material';
import { IoBagCheckSharp } from "react-icons/io5";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import { pink, orange, blue } from '@mui/material/colors';
import GradingIcon from '@mui/icons-material/Grading';

const Services = () => {
    return (
        <div className='bg-[#F4F9F4] h-screen'>
            <Navbar />
            <h1 className='text-[#5C8D89] text-3xl mt-10 ml-[45vw]'>Services</h1>
            <p className='mt-2 ml-[40vw]'>We provide multiple options to users.</p>
            <div className='flex flex-row gap-8 items-start justify-center mt-20'>
                <div className='w-64 bg-white p-6 flex flex-col items-center'>
                    <BusinessCenterIcon sx={{ color: pink[500] }} fontSize='large' className='mt-2' />
                    <p className='font-bold mt-4'>Easy to use</p>
                    <ul className='text-md text-left mt-4'>
                        <li>Click Login</li>
                        <li>Make UserID</li>
                        <li>Register Complain</li>
                    </ul>
                </div>

                <div className='w-64 bg-white p-6 flex flex-col items-center'>
                    <BarChartIcon sx={{ color: orange[500] }} fontSize='large' className='mt-2' />
                    <p className='font-bold mt-4'>Track Complain</p>
                    <ul className='text-md text-left mt-4'>
                        <li>Click Search Icon</li>
                        <li>Add UserID</li>
                        <li>Track your Complain</li>
                    </ul>
                </div>

                <div className='w-64 bg-white p-6 flex flex-col items-center'>
                    <GradingIcon sx={{ color: blue[500] }} fontSize='large' className='mt-2' />
                    <p className='font-bold mt-4'>Detail Analytics</p>
                    <ul className='text-md text-left mt-4'>
                        <li>Click Login</li>
                        <li>Add Admin/Owner ID</li>
                        <li>Check Dashboard</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;
