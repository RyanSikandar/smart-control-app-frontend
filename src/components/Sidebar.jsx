import React, { useState } from 'react';
import { MdAnalytics } from "react-icons/md";
import { CiPower } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";


const Sidebar = ({children}) => {
    const [isExtended, setIsExtended] = useState(false);
    return (
        <>
        <div>
            <div className='p-4 fixed top-0 flex justify-between nav-width text-white bg-[#5C8D89]'>
                <div>
                    <h1 className='text-xl mt-3'>Smart Facility Management System</h1>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <CiPower size={25} className='hover: cursor-pointer'/>
                    <RxAvatar size={25} className='hover: cursor-pointer'/>
                    <IoIosNotificationsOutline size={25} className='hover: cursor-pointer'/>
                </div>
            </div>
            <nav
                className={`bg-[#5C8D89] text-white w-fit h-screen p-4 fixed top-0 z-10`} onMouseEnter={() => setIsExtended(true)} onMouseLeave={() => setIsExtended(false)}>
                {/* Add your icons here */}
                <div className="flex gap-4 p-5" > <MdAnalytics size={25} />{isExtended && <p>Icon 1</p>}</div>
                <div className="flex gap-4 p-5" > <MdAnalytics size={25} />{isExtended && <p>Icon 2</p>}</div>
                <div className="flex gap-4 p-5" > <MdAnalytics size={25} />{isExtended && <p>Icon 3</p>}</div>
                <div className="flex gap-4 p-5" > <MdAnalytics size={25} /> {isExtended && <p>Icon 4</p>}</div>
                <div className="flex gap-4 p-5" > <MdAnalytics size={25} />{isExtended && <p>Icon 5</p>}</div>
            </nav>
            </div>
            <div className='p-1 child-width'>{children}</div>
            </>
    );
};

export default Sidebar;
