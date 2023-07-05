import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from './Avatar';

export default function Login() {
  const [emailaddress] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailaddress + '  ' + password);
    // Perform login logic here

    // Redirect to the home page after successful login
    history.push('/');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='w-[10vw] bg-white p-5'>
        <h1 className='font-semibold text-2xl my-6'>Login</h1>
        <div className='mb-6'>
        <Avatar src={avatar} /> {/* Add the Avatar component here */}
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Avatar Image
          </label>
        <input
            type='file'
            onChange={handleAvatarChange}
            className='text-sm'
          />
      </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            enter email 
          </label>
          <input
            type='text'
            value={emailaddress}
            onChange={(e) => setemail(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500'
            placeholder='email'
            required
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Your password
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Login
        </button>
      </form>
    </div>
  );
}

