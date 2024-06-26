import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Complains = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [complains, setComplains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('userData'));
    const userType = user.data.type.toLowerCase();
    const userName = `${user.data.name.toLowerCase()}`;

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const getComplains = async () => {
        try {
            const { data } = await axios.get('https://smart-control-app-backend.vercel.app/api/complains/getComplains');
            setComplains(data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Complains:', error);
        }
    };

    useEffect(() => {
        getComplains();
    }, []);

    const handleOptionClick = (option, id) => {
        if (option === 'resolve') {
            navigate(`/portal/complains/resolve/${id}`);
        }
        if (option === 'respond') {
            navigate(`/portal/complains/respond/${id}`);
        } else if (option === 'Assign') {
            navigate(`/portal/complains/assign/${id}`);
        } else if (option === 'view') {
            navigate(`/portal/complains/view/${id}`);
        }
    };

    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>
                    <div className='flex justify-between'>
                        <div><h1>Complains</h1></div>
                        {userType === "user" && <div><Link to="/portal/complains/addComplain" className="btn btn-outline btn-success btn-sm text-center justify-center">{`+ Add New Complain`}</Link></div>}
                    </div>
                    <div className="mt-4">
                    </div>
                    <div className="overflow-x-auto">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>{error}</div>
                        ) : (<table className="table">
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
                                {complains.map((complain, index) => (
                                    (userType === "user" && complain.complainantName.toLowerCase() !== userName) ? null :
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{complain.ComplaintNo}</td>
                                            <td>{complain.Nature}</td>
                                            <td>{complain.Priority}</td>
                                            <td>{complain.Description}</td>
                                            <td>{complain.complainantName}</td>
                                            <td>{complain.Contact}</td>
                                            <td>{complain.Fcode}</td>
                                            <td>{complain.Date}</td>
                                            <td>{complain.Status}</td>
                                            <td className='relative'>
                                                <BsThreeDots size={22} onClick={toggleOptions} />
                                                {showOptions && (
                                                    <div className=' bg-white border rounded-md shadow-lg'>
                                                        {userType === "service provider" && <p onClick={() => handleOptionClick('respond', complain._id)} className='p-1 cursor-pointer'>Respond</p>}
                                                        {userType.toLowerCase() === 'admin' && <p onClick={() => handleOptionClick('Assign', complain._id)} className='p-1 cursor-pointer'>Assign</p>}
                                                        {userType === "user" && <p onClick={() => handleOptionClick('resolve', complain._id)} className='p-1 cursor-pointer'>Resolve</p>}

                                                        <p onClick={() => handleOptionClick('view', complain._id)} className='p-1 cursor-pointer'>View</p>
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

export default Complains;
