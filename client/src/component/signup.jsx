import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4000/api/signup', formData);
      console.log("Signup successful from fontend", response.data);
      navigate('/login')
    } catch (error) {
      console.error('Signup Failed', error.response.data);
    }
  };
  

  return (
    <div className='bg-zinc-900 w-full h-screen text-black flex justify-center items-center'>
      <div className='bg-white-500 w-[50vw] h-[30vw] flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='text-[1vw] block'>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              required
              className='w-full border p-2'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='text-[1vw] block'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
              className='w-full border p-2'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-[1vw] block'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              required
              className='w-full border p-2'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 cursor-pointer'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
