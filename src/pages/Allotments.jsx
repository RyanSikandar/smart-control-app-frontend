import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Allotments = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [allotments, setAllotments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        if (currentUser && currentUser.data.type === 'admin') {
            const getAllotments = async () => {
                try {
                    const { data } = await axios.get('http://localhost:5000/api/allotment/getAllotmentInfo');
                    setAllotments(data.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching facilities:', error);
                    setError('Error fetching facilities');
                }
            };

            getAllotments();
        } else {
            setLoading(false);
        }
    }, [currentUser]);

    if (!currentUser || currentUser.data.type !== 'admin') {
        return <div>Unauthorised</div>;
    }

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option, id) => {
        if (option === 'edit') {
            console.log('Edit clicked');
        } else if (option === 'delete') {
            console.log('Delete clicked');
        } else if (option === 'view') {
            navigate(`/portal/allotments/view/${id}`);
            console.log('View clicked');
        }
    };

    const handleSearchClick = () => {
        setSearchExpanded(true);
    };

    const handleSearchBlur = () => {
        setSearchExpanded(false);
    };

    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>
                    <div className='flex justify-between'>
                        <div><h1>Allotments</h1></div>
                        <div><Link to="/portal/allotments/create" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add Allotment`}</Link></div>
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
                        ) : (
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
                                    {allotments.map((allotment, index) => (
                                        <tr key={index}>
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
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Allotments;
