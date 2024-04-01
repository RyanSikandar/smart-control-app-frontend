import React from 'react';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IoBagCheckSharp } from "react-icons/io5";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import { pink,orange,blue} from '@mui/material/colors';
import GradingIcon from '@mui/icons-material/Grading';
const Services = () => {
    return (
        <div className='bg-[#F4F9F4] h-screen'>
            <Navbar />
            <h1 className='text-[#5C8D89] text-3xl mt-10'>Services</h1>
            <p className='mt-2'>We provide multiple options to users.</p>
            <div className='flex flex-row gap-8 items-center justify-center mt-20'>
                <div className='w-64 h-60 bg-white'><BusinessCenterIcon sx={{ color: pink[500] }} fontSize='large' className='mt-6' />
                    <p className='font-bold mt-2'>Easy to use</p>
                    <ul className='text-md text-left ml-8 mt-8'>
                        <li>Click Login</li>
                        <li>Make UserID</li>
                        <li>Register Complain</li>
                    </ul>
                </div>
                <div className='w-64 h-60 bg-white'><p><BarChartIcon sx={{ color: orange[500] }} fontSize='large' className='mt-6' /></p>
                    <p className='font-bold mt-2'>Track Complain</p>
                    <ul className='text-md text-left ml-8 mt-8'>
                        <li>Click Login</li>
                        <li>Make UserID</li>
                        <li>Register Complain</li>
                    </ul>
                </div>
                <div className='w-64 h-60 bg-white'><GradingIcon sx={{ color: blue[500] }} fontSize='large' className='mt-6' />
                    <p className='font-bold mt-2'>Detail Analytics</p>
                    <ul className='text-md text-left ml-8 mt-8'>
                        <li>Click Login</li>
                        <li>Make UserID</li>
                        <li>Register Complain</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;