import axios from 'axios';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const USERS_API = 'https://apidata-zkgz.onrender.com/users';

const Create = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        username: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(USERS_API, values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(error => console.log(error.message))

    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>Name :</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='form-control' 
                        placeholder='enter name'
                        onChange={e => setValues({...values, name: e.target.value})} 
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>Email :</label>
                    <input 
                        type='email' 
                        name='email' 
                        className='form-control' 
                        placeholder='enter email'
                        onChange={e => setValues({...values, email: e.target.value})} 
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>Username :</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='form-control' 
                        placeholder='enter username'
                        onChange={e => setValues({...values, username: e.target.value})} 
                    />
                </div>
                <Link to='/' className='btn btn-outline-dark mx-2'>
                    <BiArrowBack />
                </Link>
                <button className='btn btn-dark'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create;