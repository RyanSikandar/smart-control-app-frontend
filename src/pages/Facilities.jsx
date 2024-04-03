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

    return (
        <div>
            <Sidebar>
                <div className='font-bold ml-4 p-4'>
                    <h1>Facilities</h1>
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
                                <tr className='hover'>
                                    <th>1</th>
                                    <td>FLT-0013</td>
                                    <td>169/2,MOQ,Risalpur Cantt</td>
                                    <td>Risalpur Cantt</td>
                                    <td>Type B</td>
                                    <td>31304-7532555-5, Capt Umar Saddiq</td>
                                    <td>Alotted</td>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Facilities;
