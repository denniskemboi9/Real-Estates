import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailAddress + '  ' + password);
    // Perform login logic here

    // Redirect to the home page after successful login
    history.push('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[30vw] bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold mb-6">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2.5 text-sm focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/Register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
