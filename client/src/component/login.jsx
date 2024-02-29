import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {

  const navigate = NavLink();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
          navigate('/Home');
      } else {
        console.log("error in log in")
      }
    } catch (error) {
      console.error('Login Failed:', error);
      // Handle errors appropriately
    }
  };

  return (
    <div className='bg-zinc-900 w-full h-screen text-white flex justify-center items-center'>
      <div className='bg-white-500 w-[50vw] h-[30vw] flex flex-col justify-center items-center'>
        <form >
          <div className='flex flex-col'>
            <label htmlFor="username" className='text-[1vw]'>Username</label>
            <input
              type="text"
              name='username'
              placeholder='Username'
              className='p-4 rounded-md'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password"  className='text-[1vw]'>Password</label>
            <input
              type="password"
              name='password'
              placeholder='Password'
              className='p-4 rounded-md'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='p-6 m-2 w-[16vw] bg-zinc-900 rounded-md'>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
