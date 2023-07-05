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
    history('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-90 bg-gray-100">
      <div className="w-30 bg-white rounded-lg shadow-lg p-4">
        <h1 className="text-3xl font-semibold mb-4">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-bold fs-5">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-bold fs-5">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-30"
            style={{ backgroundColor: 'green', fontWeight: 'bold', color: 'white' }}
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/Register" className="text-blue-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}


