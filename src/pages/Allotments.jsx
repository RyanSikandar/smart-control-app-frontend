import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const Allotments = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [allotments, setAllotments] = useState([]);
    const navigate = useNavigate();

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option, id) => {
        // Handle click based on the option
        if (option === 'edit') {
            // Handle edit option
            console.log('Edit clicked');
        } else if (option === 'delete') {
            // Handle delete option
            console.log('Delete clicked');
        } else if (option === 'view') {
            navigate(`/portal/allotments/view/${id}`);
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

    const getAllotments = async () => {
        try {
            let { data } = await axios.get('http://localhost:5000/api/allotment/getAllotmentInfo');
            data = data.data;
            setAllotments(data);
        } catch (error) {
            console.error('Error fetching facilities:', error);
        }
    };

    useEffect(() => {
        getAllotments();
    }, []);

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
                                    <th>Allottee</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allotments && allotments.map((allotment, index) => (
                                    <tr key={index} className='hover'>
                                        <th>{index + 1}</th>
                                        <td>{allotment.allotmentCode}</td>
                                        <td>{allotment.dateOfOccupation}</td>
                                        <td>{allotment.facilityCode}</td>
                                        <td>{allotment.facilityInfo.Address}</td>
                                        <td>{allotment.facilityInfo.City}</td>
                                        <td>{allotment.facilityInfo.Allottee}</td>
                                        <td>{allotment.facilityInfo.Status}</td>
                                        <td className='relative'>
                                            <BsThreeDots size={22} onClick={toggleOptions} />
                                            {showOptions && (
                                                <div className=' bg-white border rounded-md shadow-lg'>
                                                    <p onClick={() => handleOptionClick('edit', allotment._id)} className='p-1 cursor-pointer'>Edit</p>
                                                    <p onClick={() => handleOptionClick('delete', allotment._id)} className='p-1 cursor-pointer'>Delete</p>
                                                    <p onClick={() => handleOptionClick('view', allotment._id)} className='p-1 cursor-pointer'>View</p>
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
