import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Facilities = () => {
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
    const facilitiesData = [
        { id: 1, facilityCode: 'FLT-0013', address: '169/2, MOQ, Risalpur Cantt', city: 'Risalpur Cantt', accommodationType: 'Type B', allottee: '31304-7532555-5, Capt Umar Saddiq', status: 'Allotted' },
        // Add more facility objects as needed
    ];
    // Filter facilities based on search query
    const filteredFacilities = facilitiesData.filter(facility =>
        facility.facilityCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.accommodationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.allottee.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>

                    <div className='flex justify-between'>
                        <div><h1>Facilities</h1></div>
                        <div> <Link to="/portal/facilities/add" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add Facility`}</Link></div>
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
                                    <th>Facility Code</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Type of Accommodation</th>
                                    <th>Allottee</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFacilities.map(facility => (
                                    <tr key={facility.id} className='hover'>
                                        <th>{facility.id}</th>
                                        <td>{facility.facilityCode}</td>
                                        <td>{facility.address}</td>
                                        <td>{facility.city}</td>
                                        <td>{facility.accommodationType}</td>
                                        <td>{facility.allottee}</td>
                                        <td>{facility.status}</td>
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

export default Facilities;
