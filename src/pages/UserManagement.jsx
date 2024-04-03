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

    const [searchExpanded, setSearchExpanded] = useState(false);
    const handleSearchClick = () => {
        setSearchExpanded(true);
    };
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchBlur = () => {
        setSearchExpanded(false);
    };
    // Sample facilities data
    const userData = [
        { id: 1, name: 'Electrician', contact: 'Spr Jabbar Hussain', email: 'jabbar@gmail.com', role: 'Role' },
        // Add more user objects as needed
    ];

    // Filter facilities based on search query
    const filteredUsers = userData.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())
    );


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
                                {filteredUsers.map(user => (
                                    <tr key={user.id} className='hover'>
                                        <th>{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.contact}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
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
