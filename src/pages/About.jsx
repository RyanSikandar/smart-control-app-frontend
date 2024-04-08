import React from 'react';
import Navbar from '../components/Navbar';
import image_corporate from '../Assets/image_corporate.jpeg';
import { CiCircleCheck } from 'react-icons/ci';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-row mt-16 gap-8'>
                <div className='w-100 ml-20'>
                    <img src={image_corporate} style={{ height: 400, width: '100%' }} alt='About Us' />
                </div>
                <div className='flex-1 flex-col text-left ml-4'>
                    <h1 className='font-bold text-2xl text-[#5C8D89]'>About Us</h1>
                    <h2 className='text-xl mt-2 text-[#5C8D89]' style={{ fontStyle: 'italic' }}>A single one Location Solution, Smart Facility Management System</h2>
                    <p className='overflow-hidden mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac tincidunt tincidunt,
                        mauris nunc tincidunt arcu, id tincidunt justo nunc id nunc. Nulla facilisi. Nulla facilisi. Sed nec
                        nunc auctor, aliquam nunc vitae, tincidunt nunc. Sed euismod, nisl ac tincidunt tincidunt, mauris nunc
                        tincidunt arcu, id tincidunt justo nunc id nunc. Nulla facilisi. Nulla facilisi.
                    </p>
                    <div className='flex items-center mt-6'>
                        <CiCircleCheck color='#5C8D89' size={"1.5em"} />
                        <span className='ml-2'>Easy to use</span>
                    </div>
                    <div className='flex items-center mt-2'>
                        <CiCircleCheck color='#5C8D89' size={"1.5em"} />
                        <span className='ml-2'>Detail Analytics</span>

                    </div>
                    <div className='flex items-center mt-2'>
                        <CiCircleCheck color='#5C8D89' size={"1.5em"} />
                        <span className='ml-2'>Complain Tracking System</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
