import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Facilities = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [facilities, setFacilities] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const getFacilities = async () => {
        try {
            const { data } = await axios.get('https://smart-control-app-backend.vercel.app/api/facility/allfacilityData');
            setFacilities(data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching facilities:', error);
        }
    };

    useEffect(() => {
        getFacilities();
    }, []);

    const handleOptionClick = (option, id) => {
        // Handle click based on the option
        if (option === 'edit') {

            // Handle edit option
            console.log('Edit clicked');

        } else if (option === 'delete') {
            // Handle delete option
            console.log('Delete clicked');
        } else if (option === 'view') {
            navigate(`/portal/facilities/view/${id}`);
            console.log('View clicked');
        }
    };

    const [searchExpanded, setSearchExpanded] = useState(false);
    const handleSearchClick = () => {
        setSearchExpanded(true);
    };

    const handleSearchBlur = () => {
        setSearchExpanded(false);
    };

    const [searchQuery, setSearchQuery] = useState('');

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
                       {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>{error}</div>
                        ) :( <table className="table">
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
                                {facilities && facilities.map((facility, index) => (
                                    <tr key={index} className='hover'>
                                        <th>{index + 1}</th>
                                        <td>{facility.Fcode}</td>
                                        <td>{facility.Address}</td>
                                        <td>{facility.City}</td>
                                        <td>{facility.Type}</td>
                                        <td>{facility.Allotee}</td>
                                        <td>{facility.Status}</td>
                                        <td className='relative'>
                                            <BsThreeDots size={22} onClick={toggleOptions} />
                                            {showOptions && (
                                                <div className=' bg-white border rounded-md shadow-lg'>
                                                    <p onClick={() => handleOptionClick('edit', facility._id)} className='p-1 cursor-pointer'>Edit</p>
                                                    <p onClick={() => handleOptionClick('delete', facility._id)} className='p-1 cursor-pointer'>Delete</p>
                                                    <p onClick={() => handleOptionClick('view', facility._id)} className='p-1 cursor-pointer'>View</p>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>)}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Facilities;
