import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + '  ' + password);
    // Perform sign up logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-90 bg-gray-500">
      <div className="w-50 bg-white rounded-lg shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold fs-5 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control fs-5 bg-gray-100 text-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold fs-5 text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control fs-5 bg-gray-100 text-gray-800"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold fs-5 text-black">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control fs-5 bg-gray-100 text-gray-800"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success fw-bold fs-5"
          >
            Agree &amp; Join
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          Already Registered?{' '}
          <Link to="/login" className="text-blue-600 hover-text-decoration-underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}





