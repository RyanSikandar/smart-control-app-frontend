import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'; // Import Link

const AddUser = () => {
    const [inputs, setInputs] = useState({
        "First Name": '',
        "Last Name": '',
        "Email": '',
        "Password": '',
        "Confirm Password": '',
        "Contact": '',
        "CNIC": '',
        "Gender": '', // Initialize with empty string
        "Select Type": '', // Initialize with empty string
        "PA/PSS/Army No": '',
        "Unit No": '',
        "Address": '',
        "Role": '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Send data to backend here
        console.log("Saving user data:", inputs);
        // You can send a POST request to your backend API endpoint here
    };

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-4'>Add New User</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/usermanagement" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(inputs).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className={`block text-sm font-medium text-gray-700 ${value ? 'top-0' : 'top-1/2 transform -translate-y-1/2'}`}>{key}</label>
                                    {key === 'Gender' ? (
                                        <select id={key} name={key} onChange={handleChange} value={value} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    ) : key === 'Select Type' ? (
                                        <select id={key} name={key} onChange={handleChange} value={value} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                                            <option value="">Select Type</option>
                                            <option value="Type A">Type A</option>
                                            <option value="Type B">Type B</option>
                                        </select>
                                    ) : (
                                        <input type='text' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='font-bold  p-4 justify-between flex'>
                            <div><h1 className=''>Permissions</h1></div>
                            <div>
                                <select id="role" name="role" onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                                    <option value="">Select Type</option>
                                    <option value="Type A">Type A</option>
                                    <option value="Type B">Type B</option>
                                </select>
                            </div>
                        </div>
                        {/* Save User button */}
                        <button onClick={handleSave} className="btn btn-success mt-4">Save User</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default AddUser;
