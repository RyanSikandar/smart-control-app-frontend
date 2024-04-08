import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import { useEffect } from 'react';
const AddComplain = () => {
    // Retrieve data from local storage
    const userDataString = localStorage.getItem('userData');

    // Parsing the JSON string into an object
    const userData = JSON.parse(userDataString);

    const [name, setName] = useState('')

    useEffect(() => {
        if (userData) {
            setName(userData.data.name)
        }
    })
    const [inputs, setInputs] = useState({
        "Complainant Name": '',
        "Facility Code": '',
        "Contact": '',
        "Complaint No": '',
        "Nature": '',
        "Description": '',
        "Priority": '',
        "Complainant Address": '',
        "Date": '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async () => {

        // You can send a POST request to your backend API endpoint here
        const data = {
            complainantName: name,
            Fcode: inputs["Facility Code"],
            Contact: inputs["Contact"],
            ComplaintNo: inputs["Complaint No"],
            Nature: inputs["Nature"],
            Description: inputs["Description"],
            Priority: inputs["Priority"],
            complainantAddress: inputs["Complainant Address"],
            Date: inputs["Date"]
        }
        const check = await axios.post('https://smart-control-app-backend.vercel.app/api/complains/addComplain', data);
        if (check.status === 201) {
            alert('Complaint added successfully');
        }
        else {
            alert('Error adding complaint');
        }

    };

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-4'>Add New Complain</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/complains" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(inputs).map(([key, value]) => (
                                key === 'Role' ? (<div key={key} />) :
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
                                        ) : key === 'Complainant Name' ? (<input type="text" readOnly id={key} name={key} value={name} onChange={handleChange} minLength={8} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />) :
                                            key === 'Date' ? (<input type="date" id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />) : (
                                                <input type='text' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                            )}
                                    </div>
                            ))}
                        </div>

                        {/* Save Complain button */}
                        <button onClick={handleSave} className="btn btn-success mt-4">Save Complain</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default AddComplain;
