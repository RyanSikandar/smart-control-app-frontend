import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import axios from 'axios';
const AssignComplains = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [complainData, setComplainData] = useState(null); // State to hold complain data
    const [users, setUsers] = useState([]); // State to hold user
    const [user, setUser] = useState(''); // Selected user
    const [date, setDate] = useState(''); // Assign date
    const [remarks, setRemarks] = useState(''); // Remarks
    const handleSave = async () => {
        // Logic to save assign complain data
        console.log('User:', user);
        console.log('Date:', date);
        console.log('Remarks:', remarks);
        const check = await axios.patch(`http://localhost:5000/api/complains/assignComplain/${id}`, {
            Technician: user,
            Deadline: date,
            Remarks: remarks
        })
        if (check) {
            alert('Complain Assigned Successfully')
        }
        else
            alert('Error Assigning Complain')
    };

    useEffect(() => {
        // Fetch all users from the API
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/allUsers');
                // Filter users to include only those with type 'service provider'
                const serviceProviders = response.data.data.filter(user => user.Type === 'service provider');
                setUsers(serviceProviders);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        // Simulated API call to fetch complain data using the ID
        // Replace this with actual API call to fetch complain data
        const fetchComplainData = async () => {
            try {
                //Assign Complain
                // Assuming fetchDataFromAPI is a function that fetches complain data from backend
                // const complainData = await fetchDataFromAPI(id);
                setComplainData({
                    "Complain No": 'Electrician',
                    "Nature of Complain": 'Spr Jabbar Hussain',
                    "Priority": 'jabbar@gmail.com',
                    "Description": 'Role',
                    "Complainant Name": '',
                    "Complainant Contact": '',
                    "Complainant Address": '',
                    "Facility Code": '',
                    "Date": '',
                    "Status": ''
                });
            } catch (error) {
                console.error('Error fetching complain data:', error);
            }
        };

        fetchComplainData();
    }, []);

    // If complain data is not loaded yet, show loading message



    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-2 text-xl'>Assign Complains</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/complains" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>

                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Complain Information</h1>
                        {/* Render complain data */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {complainData && Object.entries(complainData).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Assign Complains</h1>
                        {/* Render assign complains form */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <div className="flex flex-col">
                                <label htmlFor='user' className="block text-sm font-medium text-gray-700">Select User:</label>
                                <select id='user' value={user} onChange={(e) => setUser(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    {/* Map through users to render options */}
                                    {users.map((user) => (
                                        <option key={user._id} value={user._id}>{user.Fname}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='date' className="block text-sm font-medium text-gray-700">Deadline:</label>
                                <input type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='remarks' className="block text-sm font-medium text-gray-700">Remarks:</label>
                                <textarea id='remarks' value={remarks} onChange={(e) => setRemarks(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>
                        <button onClick={handleSave} className="btn btn-success mt-4">Save</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default AssignComplains;
