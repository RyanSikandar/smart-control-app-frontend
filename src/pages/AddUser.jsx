import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
const AddUser = () => {
    const [inputs, setInputs] = useState({
        "First Name": '',
        "Last Name": '',
        "Email": '',
        "Password": '',
        "Confirm Password": '',
        "Contact": '',
        "CNIC": '',
        "Gender": '',
        "Select Type": '',
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

    const handleSave = async () => {
        try {
            if (inputs["Password"] !== inputs["Confirm Password"]) {
                alert("Passwords do not match");
                return;
            }

            // You can send a POST request to your backend API endpoint here
            const data = {
                fname: inputs["First Name"],
                lname: inputs["Last Name"],
                email: inputs["Email"],
                password: inputs["Password"],
                contact: inputs["Contact"],
                cnic: inputs["CNIC"],
                gender: inputs["Gender"],
                type: inputs["Role"],
                ArmyNo: inputs["PA/PSS/Army No"],
                UnitNo: inputs["Unit No"],
                Address: inputs["Address"],
            }
            const check = await axios.post('https://smart-control-app-backend.vercel.app/api/users/Register', data);
            console.log(check);
            if (check.status === 201) {
                alert('User added successfully');
            }
        }
        catch (e) {
            alert(e.response.data.message)
        }

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
                                        ) : key === 'Confirm Password' ? (<input type="password" id={key} name={key} value={value} onChange={handleChange} minLength={8} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />) :
                                            key === 'Password' ? (<input type="password" id={key} name={key} value={value} onChange={handleChange} minLength={8} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />) : (
                                                <input type='text' id={key} name={key} value={value} onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                            )}
                                    </div>
                            ))}
                        </div>
                        <div className='font-bold  p-4 justify-between flex'>
                            <div><h1 className=''>Permissions</h1></div>
                            <div>
                                <select id="role" name="Role" onChange={handleChange} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                                    <option value="">Select Type</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="service provider">Service Provider</option>
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
