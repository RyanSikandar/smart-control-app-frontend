import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams

const ViewAllotment = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [facilityData, setFacilityData] = useState(null); // State to hold facility data
    const [allotmentData, setAllotmentData] = useState(null); // State to hold allotment data

    useEffect(() => {
        // Simulated API call to fetch facility data using the ID
        // Replace this with actual API call to fetch facility data
        const fetchFacilityData = async () => {
            try {
                // Assuming fetchDataFromAPI is a function that fetches facility data from backend
                // const facilityData = await fetchDataFromAPI(id);
                setFacilityData({
                    "Facility Code": 'FLT-0013',
                    "House/Flat": '169/2, MOQ, Risalpur Cantt',
                    "Street/Lane": 'Risalpur Cantt',
                    "Block/Colony/Area": 'Type B',
                    "FmmHQ": '31304-7532555-5, Capt Umar Saddiq',
                    "City": 'Risalpur Cantt',
                    "Type of Accommodation": 'Alotted',
                    "Year of Construction": '2022',
                    "Date of Vacation": '2024-04-10', // Sample date
                    "Google Maps URL": 'https://maps.google.com',
                    "Construction Drawing": 'construction.jpg',
                    "House Image": 'house.jpg',
                });
            } catch (error) {
                console.error('Error fetching facility data:', error);
            }
        };

        // Simulated API call to fetch allotment data using the facility ID
        // Replace this with actual API call to fetch allotment data
        const fetchAllotmentData = async () => {
            try {
                // Assuming fetchDataFromAPI is a function that fetches allotment data from backend
                // const allotmentData = await fetchDataFromAPI(id);
                setAllotmentData([
                    { id: 1, "Allotment Code": 'ALT-0013', "Date of Occupation": '2-2-2024', "Facility Code": 'FLT-013', Address: '169/MOQ', City: 'Risalpur', "Previous Allottee": '31304-7532555-5, Capt Umar Saddiq', "Current Allottee": "31304-7532555-5, Capt Umar Saddiq", Status: "Current Allotment" },
                    // Add more allotment objects as needed
                ]);
            } catch (error) {
                console.error('Error fetching allotment data:', error);
            }
        };

        fetchFacilityData();
        fetchAllotmentData();
    }, [id]);

    // If facility or allotment data is not loaded yet, show loading message
    if (!facilityData || !allotmentData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold  p-4 justify-between flex'>
                        <div><h1 className='ml-2'>View Facility</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/allotments" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        {/* Render facility data */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(facilityData).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            ))}
                        </div>
                        {/* Render allotment data */}
                        <div className="overflow-x-auto mt-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Allotment Code</th>
                                        <th>Date of Occupation</th>
                                        <th>Previous Allottee</th>
                                        <th>New Allottee</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allotmentData.map(allotment => (
                                        <tr key={allotment.id} className='hover'>
                                            <th>{allotment.id}</th>
                                            <td>{allotment["Allotment Code"]}</td>
                                            <td>{allotment["Date of Occupation"]}</td>
                                            <td>{allotment["Previous Allottee"]}</td>
                                            <td>{allotment["Current Allottee"]}</td>
                                            <td>{allotment.Status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default ViewAllotment;
