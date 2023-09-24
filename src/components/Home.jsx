import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiFillEdit, AiFillDelete, AiFillFolderOpen} from 'react-icons/ai'

const USERS_API = 'https://apidata-zkgz.onrender.com/users';

const Home = () => {

    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        axios.get(USERS_API)
        .then(res => setUsersData(res.data))
        .catch(error => console.log(error.message))
    }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Users</h1>
        <div className='tablewidth rounded bg-white border shadow p-4 table-responsive m-3'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td className='d-flex gap-2'>
                                    <button className='btn btn-sm btn-outline-dark'>
                                        <AiFillFolderOpen />
                                    </button>
                                    <button className='btn btn-sm btn-outline-dark'>
                                        <AiFillEdit />
                                    </button>
                                    <button className='btn btn-sm btn-outline-dark'>
                                        <AiFillDelete />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home;