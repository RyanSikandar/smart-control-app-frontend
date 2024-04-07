import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const RespondComplains = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [complainData, setComplainData] = useState(null); // State to hold complain data
    const [remarks, setRemarks] = useState(''); // Remarks
    const handleSave = async () => {
        await axios.patch(`http://localhost:5000/api/complains/completeComplain/${id}`)
        //Delete the data from the database
        toast.success(`Complain completed`);
        // Logic to save respond complain data
        console.log('Remarks:', remarks);
    };
    useEffect(() => {
        // Simulated API call to fetch complain data using the ID
        // Replace this with actual API call to fetch complain data
        const fetchComplainData = async () => {
            try {
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
    }, [id]);

    // If complain data is not loaded yet, show loading message
    if (!complainData) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-2 text-xl'>Respond Complains</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/complains" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>

                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Complain Information</h1>
                        {/* Render complain data */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(complainData).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Respond Complains</h1>
                        {/* Render assign complains form */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                            <div className="flex flex-col">
                                <label htmlFor='remarks' className="block text-sm font-medium text-gray-700">Remarks:</label>
                                <textarea id='remarks' value={remarks} onChange={(e) => setRemarks(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>
                        <button onClick={handleSave} className="btn btn-success mt-4">Mark as Completed</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default RespondComplains;
