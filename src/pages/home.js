import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container' style={{ paddingLeft: '100px' }}>
            <div className='p-4 text-center bg-base-'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>email</th>
                                <th>username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* dynamically generate table rows */}
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>
                                            <button className="btn btn-sm btn-info" style={{ margin: '5px' }}>View</button>
                                            <button className="btn btn-sm btn-primary" style={{ margin: '5px' }}>Edit</button>
                                            <button className="btn btn-sm btn-danger" style={{ margin: '5px' }}>Delete</button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
