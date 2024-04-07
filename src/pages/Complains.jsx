import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const Complains = () => {
    let userType = localStorage.getItem('userData');
    userType = JSON.parse(userType);
    userType = userType.data.type;
    const [showOptions, setShowOptions] = useState(false);
    const [complains, setComplains] = useState([]);
    const navigate = useNavigate();
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const getComplains = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/complains/getComplains');
            console.log(data.data)
            setComplains(data.data);
        } catch (error) {
            console.error('Error fetching Complains:', error);
        }
    };

    useEffect(() => {
        getComplains();
    }, []);

    const handleOptionClick = (option, id) => {
        // Handle click based on the option
        if (option === 'edit') {
            // Handle edit option
            console.log('Edit clicked');
        } else if (option === 'Assign') {
            console.log(id)
            navigate(`/portal/complains/assign/${id}`);

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
                                    <th>Facility Code</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complains.map((user, index) => (
                                    <tr key={index} className='hover'>
                                        <th>{index + 1}</th>
                                        <td>{user.ComplaintNo}</td>
                                        <td>{user.Nature}</td>
                                        <td>{user.Priority}</td>
                                        <td>{user.Description}</td>
                                        <td>{user.complainantName}</td>
                                        <td> {user.Contact}</td>
                                        <td>{user.Fcode}</td>
                                        <td>{user.Date}</td>
                                        <td>{user.Status}</td>

                                        <td className='relative'>
                                            <BsThreeDots size={22} onClick={toggleOptions} />
                                            {showOptions && (
                                                <div className=' bg-white border rounded-md shadow-lg'>
                                                    <p onClick={() => handleOptionClick('edit')} className='p-1 cursor-pointer'>Edit</p>
                                                    {
                                                        userType.toLowerCase() === 'type a' && <p onClick={() => handleOptionClick('Assign', user._id)} className='p-1 cursor-pointer'>Assign</p>
                                                    }
                                                    <p onClick={() => handleOptionClick('view', user._id)} className='p-1 cursor-pointer'>View</p>
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
