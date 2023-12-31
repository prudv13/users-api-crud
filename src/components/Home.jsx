import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiFillEdit, AiFillDelete, AiFillFolderOpen} from 'react-icons/ai'
import {BiSolidUserPlus} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';

const USERS_API = 'https://apidata-zkgz.onrender.com/users';

const Home = () => {

    const [usersData, setUsersData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(USERS_API)
        .then(res => setUsersData(res.data))
        .catch(error => console.log(error.message))
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to delete?");
        if(confirm){
            axios.delete(USERS_API + "/" + id)
            .then(res => {
                location.reload();
                navigate('/');
                console.log(res)
            })
            .catch(error => console.log(error.message));
        }
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Users</h1>
        <div className='tablewidth rounded bg-white border shadow p-4 table-responsive m-3'>
            <div className='d-flex justify-content-end'>
                <Link to='/create'>
                    <button className='btn btn-sm btn-outline-dark'>
                        <BiSolidUserPlus size={25} />
                    </button>
                </Link>
            </div>
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
                                <th scope='row'>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td className='d-flex gap-2'>
                                    <Link to={`/read/${user.id}`} className='btn btn-sm btn-outline-dark'>
                                        <AiFillFolderOpen />
                                    </Link>
                                    <Link to={`/update/${user.id}`} className='btn btn-sm btn-outline-dark'>
                                        <AiFillEdit />
                                    </Link>
                                    <button 
                                        className='btn btn-sm btn-outline-dark'
                                        onClick={() => handleDelete(user.id)}
                                    ><AiFillDelete />
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