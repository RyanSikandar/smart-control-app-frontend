import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const UserManagement = () => {
    const [showOptions, setShowOptions] = useState(false);
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
            navigate('/portal/facilities/view/1');
            console.log('View clicked');
        }
    };

    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>
                    <div className='flex justify-between'>
                        <div><h1>User Management</h1></div>
                        <div> <Link to="/portal/usermanagement/create" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add New User`}</Link></div>
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
                                <tr className='hover'>
                                    <th>1</th>
                                    <td>Electrician</td>
                                    <td>Spr Jabbar Hussain</td>
                                    <td>jabbar@gmail.com</td>
                                    <td>Role</td>                                    <td className='relative'>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default UserManagement;
