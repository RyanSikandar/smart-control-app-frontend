import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { MdOutlineBusiness } from "react-icons/md";
export const ServiceManager = () => {
    // Retrieve data from local storage
    const userDataString = localStorage.getItem('userData');

    // Parsing the JSON string into an object
    const userData = JSON.parse(userDataString);

    const [name, setName] = useState('')

    useEffect(() => {
        if (userData) {
            setName(userData.data.name)
        }
    })

    return (
        <div>
            <Sidebar>
                <div className=' text-black'>

                    <div className='justify-start font-bold ml-4 p-4'>
                        <h1>Welcome {name}</h1>
                    </div>

                    <div className='mt-10 flex flex-wrap justify-around'>
                        <div className='min-w-50 h-50 bg-[#74B49B] rounded-lg p-6'>
                            <MdOutlineBusiness className='' size={25} />
                            <p className='mt-2'>67</p>
                            <p className='font-semibold mt-2'>Total Complains</p>
                        </div>

                        <div className='min-w-[193px] h-50 bg-[#74B49B] rounded-lg p-6'>
                            <MdOutlineBusiness className='' size={25} />
                            <p className='mt-2'>67</p>
                            <p className='font-semibold mt-2'>Active Complains</p>
                        </div>

                        <div className='min-w-[193px] h-50 bg-[#74B49B] rounded-lg p-6'>
                            <MdOutlineBusiness className='' size={25} />
                            <p className='mt-2'>67</p>
                            <p className='font-semibold mt-2'>Relaunched Companies</p>
                        </div>

                        <div className='min-w-[193px] h-50 bg-[#74B49B] rounded-lg p-6'>
                            <MdOutlineBusiness className='' size={25} />
                            <p className='mt-2'>67</p>
                            <p className='font-semibold mt-2'>Resolved Complains</p>
                        </div>

                        <div className='min-w-[193px] h-50 bg-[#74B49B] rounded-lg p-6'>
                            <MdOutlineBusiness className='' size={25} />
                            <p className='mt-2'>67</p>
                            <p className='font-semibold mt-2'> Users</p>
                        </div>

                        <div className='min-w-[193px] h-50 bg-[#74B49B] rounded-lg p-6'>
                            <MdOutlineBusiness className='' size={25} />
                            <p className='mt-2'>67</p>
                            <p className='font-semibold mt-2'>Facilities</p>
                        </div>
                    </div>

                </div></Sidebar>

        </div>
    )
}
