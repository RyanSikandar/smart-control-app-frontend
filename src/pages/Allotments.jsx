import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Allotments = () => {
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
            navigate('/portal/allotments/view/1');
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
    const AllotmentsData = [
        { id: 1, "Allotment Code": 'ALT-0013', "Date of Occupation": '2-2-2024', "Facility Code": 'FLT-013', Address: '169/MOQ', City: 'Risalpur', "Previous Allottee": '31304-7532555-5, Capt Umar Saddiq', "Current Allottee": "31304-7532555-5, Capt Umar Saddiq", Status: "Current Allotment" },
        // Add more facility objects as needed
    ];
    // Filter allotments based on search query
    const filteredAllotments = AllotmentsData.filter(allotment =>
        allotment["Allotment Code"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment["Date of Occupation"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment["Facility Code"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment.Address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment.City.toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment["Previous Allottee"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment["Current Allottee"].toLowerCase().includes(searchQuery.toLowerCase()) ||
        allotment.Status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>

                    <div className='flex justify-between'>
                        <div><h1>Allotments</h1></div>
                        <div> <Link to="/portal/allotments/create" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add Allotment`}</Link></div>
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
                                    <th>Allotment Code</th>
                                    <th>Date of Occupation</th>
                                    <th>Facility Code</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Previous Allottee</th>
                                    <th>Current Allottee</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAllotments.map(allotment => (
                                    <tr key={allotment.id} className='hover'>
                                        <th>{allotment.id}</th>
                                        <td>{allotment["Allotment Code"]}</td>
                                        <td>{allotment["Date of Occupation"]}</td>
                                        <td>{allotment["Facility Code"]}</td>
                                        <td>{allotment.Address}</td>
                                        <td>{allotment.City}</td>
                                        <td>{allotment["Previous Allottee"]}</td>
                                        <td>{allotment["Current Allottee"]}</td>
                                        <td>{allotment.Status}</td>
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

export default Allotments;
