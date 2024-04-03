import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams

const ViewFacility = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const data = {
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
    };
    const [facilityData, setFacilityData] = useState(null); // State to hold facility data

    useEffect(() => {
        // Simulated API call to fetch facility data using the ID
        // Replace this with actual API call to fetch facility data
        const fetchFacilityData = async () => {
            try {
                // Assuming fetchDataFromAPI is a function that fetches facility data from backend
                // const data = await fetchDataFromAPI(id);
                setFacilityData(data);
            } catch (error) {
                console.error('Error fetching facility data:', error);
            }
        };

        fetchFacilityData();
    }, [id]);

    // If facility data is not loaded yet, show loading message
    if (!facilityData) {
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
                            <Link to="/portal/facilities" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {/* Render each key-value pair of facility data */}
                            {Object.entries(facilityData).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                    <h1 className='ml-6'>Facility QR</h1>
                    <div className='flex justify-start ml-2 mt-2'>
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld" alt="QR Code" height={300} width={300}/>
                    </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Allottmet Code</th>
                                    <th>Date of Occupation</th>
                                    <th>Previous Allotte</th>
                                    <th>New Allottee</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover'>
                                    <th>1</th>
                                    <td>FLT-0013</td>
                                    <td>17-03-2023</td>
                                    <td>31304-7532555-5, Capt Umar</td>
                                    <td>31304-7532555-5, Capt Umar</td>
                                    <td>Current Allotment</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default ViewFacility;
