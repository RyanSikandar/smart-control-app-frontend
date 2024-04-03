import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link

const AddFacility = () => {
    const [showEdit, setShowEdit] = useState(false);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    };

    const [inputs, setInputs] = useState({
        "Facility Code": '',
        "House/Flat": '',
        "Street/Lane": '',
        "Block/Colony/Area": '',
        "FmmHQ": '',
        "City": '',
        "Type of Accommodation": '',
        "Year of Construction": '',
        "Date of Vacation": '', // Initialize with empty string
        "Google Maps URL": '',
        "Construction Drawing": '',
        "House Image": '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
    };

    const handleSave = () => {
        // Send data to backend here
        console.log("Saving facility data:", inputs);
        // You can send a POST request to your backend API endpoint here
    };

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-4'>Add New Facility</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/facilities" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(inputs).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className={`block text-sm font-medium text-gray-700 ${value ? 'top-0' : 'top-1/2 transform -translate-y-1/2'}`}>{key}</label>
                                    {key === 'Construction Drawing' || key === 'House Image' ? (
                                        <input type='file' id={key} name={key} onChange={handleFileChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    ) : key === 'Date of Vacation' ? (
                                        <input type='date' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    ) : (
                                        <input type='text' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Save Facility button */}
                        <button onClick={handleSave} className="btn btn-success mt-4">Save Facility</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default AddFacility;
