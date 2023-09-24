import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';

const USERS_API = 'https://apidata-zkgz.onrender.com/users';

const Update = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username: ''
    });
    const {id} = useParams();
    useEffect(() => {
        axios.get(USERS_API + '/' + id)
        .then(res => setUserData(res.data))
        .catch(error => console.log(error.message))
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(USERS_API + '/' + id, userData)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(error => console.log(error.message))

    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1 className='my-3 text-center'>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>Name :</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='form-control' 
                        placeholder='enter name'
                        value={userData.name}
                        onChange={e => setUserData({...userData, name: e.target.value})}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>Email :</label>
                    <input 
                        type='email' 
                        name='email' 
                        className='form-control' 
                        placeholder='enter email'
                        value={userData.email}
                        onChange={e => setUserData({...userData, email: e.target.value})}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>Username :</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='form-control' 
                        placeholder='enter username'
                        value={userData.username}
                        onChange={e => setUserData({...userData, username: e.target.value})}
                    />
                </div>
                <Link to='/' className='btn btn-outline-dark mx-2'>
                    <BiArrowBack />
                </Link>
                <button className='btn btn-dark'>update</button>
            </form>
        </div>
    </div>
  )
}

export default Update;