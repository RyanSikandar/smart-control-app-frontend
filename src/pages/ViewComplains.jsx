import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import axios from 'axios';
const ViewComplains = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [complainData, setComplainData] = useState(null); // State to hold complain data
    const [user, setUser] = useState(''); // Selected user
    const [date, setDate] = useState(''); // Assign date
    const [remarks, setRemarks] = useState(''); // Remarks
    const handleSave = () => {
        // Logic to save assign complain data
        console.log('User:', user);
        console.log('Date:', date);
        console.log('Remarks:', remarks);
    };
    useEffect(() => {
        // Simulated API call to fetch complain data using the ID
        // Replace this with actual API call to fetch complain data
        const fetchComplainData = async () => {
            try {
                // Assuming fetchDataFromAPI is a function that fetches complain data from backend
                // const complainData = await fetchDataFromAPI(id);

                const complain = await axios.get(`https://smart-control-app-backend.vercel.app/api/complains/Complain/${id}`);
                console.log(complain.data.data);
                setComplainData({
                    "Complain No": complain.data.data.ComplaintNo,
                    "Nature of Complain": complain.data.data.Nature,
                    "Priority": complain.data.data.Priority,
                    "Description": complain.data.data.Description,
                    "Complainant Name": complain.data.data.complainantName,
                    "Complainant Contact": complain.data.data.Contact,
                    "Complainant Address": complain.data.data.complainantAddress,
                    "Facility Code": complain.data.data.Fcode,
                    "Date": complain.data.data.Date,
                    "Status": complain.data.data.Status
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
                        <div><h1 className='ml-2 text-xl'>View Complains</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/complains" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>

                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Complain Information</h1>
                        {/* Render complain data */}
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {Object.entries(complainData).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Complain Assignment</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Technician Name</th>
                                        <th>Deadline</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {<tr className='hover'>
                                        <th>1</th>
                                        <td>{complainData["Nature of Complain"]}</td>

                                        <td>{complainData["Date"]}</td>
                                        <td>{complainData['Remarks']}</td>

                                    </tr>}
                                </tbody>
                            </table>
                        </div></div>
                </div>
            </Sidebar>
        </div>
    );
};

export default ViewComplains;
