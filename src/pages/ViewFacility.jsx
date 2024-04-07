import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import axios from 'axios';
const ViewFacility = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [facilityData, setFacilityData] = useState(null); // State to hold facility data
    const [allotmentData, setAllotmentData] = useState(null); // State to hold allotment data

    useEffect(() => {
        const fetchFacilityData = async () => {
            try {
                // Fetch facility data from the API using the facility ID
                const response = await axios.get(`http://localhost:5000/api/facility/facilityData/${id}`);
                const data = response.data.data;
                // Filter the facility data to include only the desired attributes
                const filteredData = {
                    FacilityCode: data.Fcode,
                    Address: data.Address,
                    City: data.City,
                    Type: data.Type,
                    Year: data.Year,
                    Date: data.Date,
                    URL: data.URL
                };

                const response_allot = await axios.get(`http://localhost:5000/api/allotment/getAllotmentInfo`);
                const allotmentData = response_allot.data.data;
                // console.log(allotmentData);
                //Filter allotmentdata to include allotment of the facility
                let filteredAllotmentData = allotmentData.filter(allotment => allotment.facilityCode === data.Fcode);
                filteredAllotmentData = filteredAllotmentData.map(allotment => {
                    return {
                        AllotmentCode: allotment.allotmentCode,
                        DateOfOccupation: allotment.dateOfOccupation,
                        Allottee: allotment.facilityInfo.Allottee,
                        Status: allotment.facilityInfo.Status
                    };

                })
                console.log(filteredAllotmentData);
                setFacilityData(filteredData);
                setAllotmentData(filteredAllotmentData);
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
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld" alt="QR Code" height={300} width={300} />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Allotment Code</th>
                                    <th>Date of Occupation</th>
                                    <th>Allotte</th>

                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allotmentData && allotmentData.map((allotment, index) => (
                                    <tr className='hover' key={index}>
                                        <th>{index + 1}</th>
                                        <td>{allotment.AllotmentCode}</td>
                                        <td>{allotment.DateOfOccupation}</td>
                                        <td>{allotment.Allottee}</td>
                                        <td>{allotment.Status}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default ViewFacility;
