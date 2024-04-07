import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
const AddAllotment = () => {
    const [showEdit, setShowEdit] = useState(false);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    };

    const [inputs, setInputs] = useState({
        "Select Facility": '',
        "New Allottee": '',
        "Date of Occupation": '',
        "Allotment Code": ''

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
        console.log("Saving facility data:", inputs);

        const formattedData = {
            Acode: inputs["Allotment Code"],
            Fcode: inputs["Select Facility"],
            Allottee: inputs["New Allottee"],
            dateOfOccupation: inputs["Date of Occupation"]
        }
        // You can send a POST request to your backend API endpoint here
        axios.post('http://localhost:5000/api/allotment/addAllotment', formattedData)
            .then(res => {
                console.log(res.data);
                alert('Allotment added successfully');
            })
            .catch(err => {
                console.error(err);
                alert('Failed to add allotment');
            });

    };

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-4'>Add New Allotment</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/allotments" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(inputs).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className={`block text-sm font-medium text-gray-700 ${value ? 'top-0' : 'top-1/2 transform -translate-y-1/2'}`}>{key}</label>
                                    {key === 'Date of Occupation' ? (
                                        <input type='date' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    ) : (
                                        <input type='text' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Save Facility button */}
                        <button onClick={handleSave} className="btn btn-success mt-4">Save Allotment</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default AddAllotment;
