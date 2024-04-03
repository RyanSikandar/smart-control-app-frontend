import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResolveComplains = () => {
    const { id } = useParams(); // Get the facility ID from the URL params
    const [complainData, setComplainData] = useState(null); // State to hold complain data
    const [remarks, setRemarks] = useState(''); // Remarks
    const [disciplineData, setDisciplineData] = useState([
        { discipline: 'Health', satisfied: false, notSatisfied: false },
        { discipline: 'Safety', satisfied: false, notSatisfied: false },
        { discipline: 'Civil Works', satisfied: false, notSatisfied: false },
        { discipline: 'Finishes', satisfied: false, notSatisfied: false },
        { discipline: 'Material', satisfied: false, notSatisfied: false },
        { discipline: 'Electrical', satisfied: false, notSatisfied: false },
        { discipline: 'Plumbing', satisfied: false, notSatisfied: false },
        { discipline: 'Store', satisfied: false, notSatisfied: false },
        { discipline: 'Labor', satisfied: false, notSatisfied: false },
        { discipline: 'Time', satisfied: false, notSatisfied: false }
    ]);
    // State to hold discipline data

    const handleSave = () => {
        //Delete the data from the database
        toast.success(`Response for Complain No:${id} Submitted`);
        // Logic to save respond complain data
        console.log('Remarks:', remarks);
        console.log('Discipline Data:', disciplineData);
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

    // Function to handle discipline checkbox change
    const handleDisciplineChange = (index, field) => {
        // Update the corresponding discipline checkbox value
        const updatedData = [...disciplineData];
        if (field === 'satisfied') {
            updatedData[index].notSatisfied = false;
        }
        else {
            updatedData[index].satisfied = false;
        }
        updatedData[index][field] = !updatedData[index][field];
        setDisciplineData(updatedData);
    };

    return (
        <div>
            <Sidebar>
                <div>
                    <div className='font-bold p-4 justify-between flex'>
                        <div><h1 className='ml-2 text-xl'>Respond Complains</h1></div>
                        <div>
                            {/* Use Link for navigation */}
                            <Link to="/portal/complains" className="btn btn-outline btn-success btn-sm text-center justify-center">{`< Back`}</Link>
                        </div>
                    </div>

                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Complain Information</h1>
                        {/* Render complain data if it exists */}
                        {complainData && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {Object.entries(complainData).map(([key, value]) => (
                                    <div key={key} className="flex flex-col">
                                        <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                                        <input type="text" id={key} name={key} value={value} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className='p-6'>
                        <h1 className='font-bold mb-2 text-xl'>Complain Feeback</h1>
                        {/* Render assign complains form */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <div className="flex flex-col">
                                <label htmlFor='remarks' className="block text-sm font-medium text-gray-700">Remarks:</label>
                                <textarea id='remarks' value={remarks} onChange={(e) => setRemarks(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>

                        {/* Table for Discipline */}
                        <div className="mt-6">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discipline</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfied</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Not Satisfied</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {disciplineData.map((item, index) => (
                                        <tr key={index}>
                                           
                                            <td className="px-6 py-4 whitespace-nowrap">{item.discipline}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    checked={item.satisfied}
                                                    onChange={() => handleDisciplineChange(index, 'satisfied')}
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    checked={item.notSatisfied}
                                                    onChange={() => handleDisciplineChange(index, 'notSatisfied')}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={handleSave} className="btn btn-success mt-4">Save Feeback</button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default ResolveComplains;
