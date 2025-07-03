import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
    const [allUser, setAllUsers] = useState([]);
    const [openUpdateRole, setOpenUpdateRole] = useState(false);
    const [updateUserDetails, setUpdateUserDetails] = useState({
        email: "",
        name: "",
        role: "",
        _id: ""
    });

    const fetchAllUsers = async () => {
        console.log("Attempting to fetch data from:", SummaryApi.allUser.url); // Log URL for debugging
        console.log("Using method:", SummaryApi.allUser.method); // Log method for debugging

        try {
            const fetchData = await fetch(SummaryApi.allUser.url, {
                method: SummaryApi.allUser.method,
                credentials: 'include'
            });

            // Check if fetch was successful
            if (!fetchData.ok) {
                throw new Error(`HTTP error! Status: ${fetchData.status}`); // Log HTTP status error
            }

            const dataResponse = await fetchData.json();

            // Check if data was received successfully
            if (dataResponse.success) {
                setAllUsers(dataResponse.data);
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            console.error("Fetch error:", error); // Log any fetch-related error
            toast.error("Failed to fetch data. Please try again.");
        }
    };

    useEffect(() => {
        fetchAllUsers(); // Call fetch function on component mount
    }, []);

    return (
        <div className='bg-white pb-4'>
            <table className='w-full userTable'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((el, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                                        onClick={() => {
                                            setUpdateUserDetails(el);
                                            setOpenUpdateRole(true);
                                        }}>
                                        <MdModeEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                openUpdateRole && (
                    <ChangeUserRole 
                        onClose={() => setOpenUpdateRole(false)} 
                        name={updateUserDetails.name}
                        email={updateUserDetails.email}
                        role={updateUserDetails.role}
                        userId={updateUserDetails._id}
                        callFunc={fetchAllUsers}
                    />
                )
            }
        </div>
    );
};

export default AllUsers;
