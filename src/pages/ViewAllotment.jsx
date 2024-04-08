import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import axios from 'axios';
const ViewAllotment = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [allotmentData, setAllotmentData] = useState(null); // State to hold allotment data

    useEffect(() => {
        // Simulated API call to fetch allotment data using the facility ID
        // Replace this with actual API call to fetch allotment data
        const fetchAllotmentData = async () => {
            try {
                // Assuming fetchDataFromAPI is a function that fetches allotment data from backend
                const allotment = await axios.get(`https://smart-control-app-backend.vercel.app/api/allotment/getAllotmentInfo/${id}`);
                const newAllotmentData = {
                    "Allotment Code": allotment.data.data.Acode,
                    "Facility Code": allotment.data.data.Fcode,
                    "Date of Occupation": allotment.data.data.dateOfOccupation,
                    Allottee: allotment.data.data.Allottee
                }
                setAllotmentData(newAllotmentData);
            } catch (error) {
                console.error('Error fetching allotment data:', error);
            }
        };

        fetchAllotmentData();
    }, [id]);

    // If facility or allotment data is not loaded yet, show loading message
    if (!allotmentData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-2'>View Allotment</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/allotments" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {/* Render each key-value pair of facility data */}
                            {Object.entries(allotmentData).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default ViewAllotment;
