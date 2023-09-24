import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';

const USERS_API = 'https://apidata-zkgz.onrender.com/users';

const Read = () => {
    const [userData, setUserData] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get(USERS_API + '/' + id)
        .then(res => setUserData(res.data))
        .catch(error => console.log(error.message))
    }, []);
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h3 className='mb-4'>User Details</h3>
            <div className='mb-2'>
                <strong>User ID: {userData.id}</strong>
            </div>
            <div className='mb-2'>
                <strong>Name: {userData.name}</strong>
            </div>
            <div className='mb-2'>
                <strong>Email: {userData.email}</strong>
            </div>
            <div className='mb-3'>
                <strong>Username: {userData.username}</strong>
            </div>
            <Link to='/' className='btn btn-outline-dark mx-2'>
                <BiArrowBack />
            </Link>
            <Link to={`/update/${id}`} className='btn btn-outline-dark'>
                <AiFillEdit />
            </Link>
        </div>

    </div>
  )
}

export default Read;