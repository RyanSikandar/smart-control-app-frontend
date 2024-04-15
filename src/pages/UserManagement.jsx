import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const UserManagement = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [userData, setUserData] = useState([]);

    const navigate = useNavigate();
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        // Handle click based on the option
        if (option === 'edit') {
            // Handle edit option
            console.log('Edit clicked');
        } else if (option === 'delete') {
            // Handle delete option
            console.log('Delete clicked');
        } else if (option === 'view') {
            console.log('View clicked');
        }
    };

    const [searchExpanded, setSearchExpanded] = useState(false);
    const handleSearchClick = () => {
        setSearchExpanded(true);
    };
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchBlur = () => {
        setSearchExpanded(false);
    };
   
    //get user data from backend
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://smart-control-app-backend.vercel.app/api/users/allUsers');
            const data = await response.json();
            setUserData(data.data);
        };
        fetchUsers();
    }, []);


    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>
                    <div className='flex justify-between'>
                        <div><h1>User Management</h1></div>

                        <div> <Link to="/portal/usermanagement/create" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add New User`}</Link></div>
                    </div>
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            onClick={handleSearchClick}
                            onBlur={handleSearchBlur}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`border px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ${searchExpanded ? 'w-64 border-black' : 'w-48'}`}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                                {userData.map((user,index) => (
                                    <tr key={index} className='hover'>
                                        <th>{index+1}</th>
                                        <td>{user.Fname}</td>
                                        <td>{user.Lname}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.Type}</td>
                                        <td className='relative'>
                                            <BsThreeDots size={22} onClick={toggleOptions} />
                                            {showOptions && (
                                                <div className=' bg-white border rounded-md shadow-lg'>
                                                    <p onClick={() => handleOptionClick('edit')} className='p-1 cursor-pointer'>Edit</p>
                                                    <p onClick={() => handleOptionClick('delete')} className='p-1 cursor-pointer'>Delete</p>
                                                    <p onClick={() => handleOptionClick('view')} className='p-1 cursor-pointer'>View</p>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default UserManagement;
