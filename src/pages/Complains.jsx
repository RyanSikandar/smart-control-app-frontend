import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Complains = () => {
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
            navigate('/portal/complains/view/1');
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
    const ComplaintData = [
        {
            id: 1, ComplainNo: 'Electrician', Nature: 'Spr Jabbar Hussain', Priority: 'jabbar@gmail.com', Description: 'Role',

            "Complainant": '', "Complainant Contact": "", "Complainant Address": "", "Facility Code": "", Date: "",
            Status: ""
        },
        // Add more user objects as needed
    ];

    // Filter facilities based on search query
    const filteredComplaints = ComplaintData.filter(complaint =>
        complaint.ComplainNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.Nature.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.Priority.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.Description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.Complainant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint["Complainant Contact"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint["Complainant Address"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint["Facility Code"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.Date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.Status.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>
                    <div className='flex justify-between'>
                        <div><h1>Complains</h1></div>

                        <div> <Link to="/portal/allotments/create" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add New Complain`}</Link></div>
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
                                    <th>Complain No</th>
                                    <th>Nature of Complain</th>
                                    <th>Priority</th>
                                    <th>Description</th>
                                    <th>Complainant Name</th>
                                    <th>Complainant Contact</th>
                                    <th>Complainant Address</th>
                                    <th>Facility Code</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredComplaints.map(user => (
                                    <tr key={user.id} className='hover'>
                                        <th>{user.id}</th>
                                        <td>{user.ComplainNo}</td>
                                        <td>{user.Nature}</td>
                                        <td>{user.Priority}</td>
                                        <td>{user.Description}</td>
                                        <td>{user.Complainant}</td>
                                        <td>{user["Complainant Contact"]}</td>
                                        <td> {user["Complainant Address"]}</td>
                                        <td>{user["Facility Code"]}</td>
                                        <td>{user.Date}</td>
                                        <td>{user.Status}</td>

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

export default Complains;
