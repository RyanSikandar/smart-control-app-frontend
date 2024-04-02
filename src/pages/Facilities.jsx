import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';

const Facilities = () => {
    const [showEdit, setShowEdit] = useState(false);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    };

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between'>
                        <h1 className='ml-4'>Facilities</h1></div>
                    <div className='overflow-x-auto'>
                        <table className='table'>
                            {/* head */}
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
                                {/* row 1 */}
                                <tr className='hover'>
                                    <th>1</th>
                                    <td>FLT-0013</td>
                                    <td>169/2,MOQ,Risalpur Cantt</td>
                                    <td>Risalpur Cantt</td>
                                    <td>Type B</td>
                                    <td>31304-7532555-5, Capt Umar Saddiq</td>
                                    <td>Allotted</td>
                                    <td className='relative'>
                                        <div onClick={toggleEdit}>
                                            <BsThreeDots size={22} />
                                            {showEdit && (
                                                <div className=' border border-gray-300 bg-white z-10 hover:cursor-pointer'>
                                                    <p className='p-1 hover:bg-slate-400'>Edit</p>
                                                    <p className='p-1 hover:bg-slate-400'>Delete</p>
                                                    <p className='p-1 hover:bg-slate-400'>View</p>
                                                </div>
                                            )}
                                        </div>
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
