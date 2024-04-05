import React, { useState } from 'react';
import { MdAnalytics } from "react-icons/md";
import { CiPower } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiHomeGearFill } from "react-icons/ri";
import { FaArrowsAltH } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
const Sidebar = ({ children }) => {
    const navigate = useNavigate();
    const [isExtended, setIsExtended] = useState(false);
    const handleClicked = (icon) => {
        if (icon === "Facilities") {
            navigate("/portal/facilities");
        } else if (icon === "Complains") {
            navigate("/portal/complains");
        } else if (icon === "UserManagement") {
            navigate("/portal/usermanagement");
        } else if (icon === "Allotments") {
            navigate("/portal/allotments");
        }
    }
    return (
        <>
            <div>
                <div className='p-4 fixed top-0 flex justify-between nav-width text-white bg-[#5C8D89]'>
                    <div>
                        <h1 className='text-xl mt-3'>Smart Facility Management System</h1>
                    </div>
                    <div className='flex flex-col'>
                        <div><h1 className='mb-1'>Welcome Jee !</h1></div>
                        <div className='flex justify-center items-center gap-4'>
                            <CiPower size={25} className='hover: cursor-pointer' />
                            <RxAvatar size={25} className='hover: cursor-pointer' />
                            <IoIosNotificationsOutline size={25} className='hover: cursor-pointer' />
                        </div>
                    </div>                </div>
                <nav
                    className={`bg-[#5C8D89] text-white w-fit h-screen p-4 fixed top-0 z-10`} onMouseEnter={() => setIsExtended(true)} onMouseLeave={() => setIsExtended(false)}>
                    {/* Add your icons here */}
                    <div className="flex gap-4 p-5" > <TbWorld size={25} />{isExtended && <p onClick={
                        () => handleClicked("Complains")
                    } className='hover:underline cursor-pointer'>Complains</p>}</div>

                    <div className="flex gap-4 p-5" > <FaRegUser size={25} />{isExtended && <p className='hover:underline cursor-pointer' onClick={
                        () => handleClicked("UserManagement")
                    }>User Management</p>}</div>
                    <div className="flex gap-4 p-5" > <RiHomeGearFill size={25}
                    />{isExtended && <p className='hover:underline cursor-pointer' onClick={
                        () => handleClicked("Facilities")
                    }>Facilities</p>}</div>
                    <div className="flex gap-4 p-5" > <FaArrowsAltH size={25}

                    /> {isExtended && <p className='hover:underline cursor-pointer' onClick={
                        () => handleClicked("Allotments")
                    }>Allotments</p>}</div>

                </nav>
            </div>
            <div className='p-1 child-width'>{children}</div>
        </>
    );
};

export default Sidebar;
