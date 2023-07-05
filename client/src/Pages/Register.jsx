// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const history = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email + '  ' + password);
//     // Perform sign up logic here
//   };

//   const handleAgreeAndJoin = () => {
//     // Redirect to the login page
//     history('/login');
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-90 bg-gray-500">
//       <div className="w-50 bg-white rounded-lg shadow-lg p-4">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label fw-bold fs-5 text-black">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control fs-5 bg-gray-100 text-gray-800"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label fw-bold fs-5 text-black">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control fs-5 bg-gray-100 text-gray-800"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label fw-bold fs-5 text-black">
//               Confirm password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="form-control fs-5 bg-gray-100 text-gray-800"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-success fw-bold fs-5"
//             onClick={handleAgreeAndJoin}
//           >
//             Agree &amp; Join
//           </button>
//         </form>
//         <div className="mt-4 text-sm text-gray-600">
//           Already Registered?{' '}
//           <Link to="/login" className="text-blue-600 hover-text-decoration-underline">
//             Sign in
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
export default function Register() {

  const {register} = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")


  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(email+ "  "+password)
     register(email, password, password_confirmation)
  }
  return (
    <div className='flex justify-center'>

<form onSubmit={handleSubmit} className='w-[30vw] bg-white p-5'>
  <h1 className='font-semibold text-2xl my-6'>SignUp</h1>

  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="email" required />
  </div>

  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
  </div>
  
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password Confirmation</label>
    <input type="password_confirmation" value={password_confirmation} onChange={(e)=> setPasswordConfirmation(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
  </div>
  
  <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
    Sign up
  </button>
  <div className='my-5'>Already Registered? 
      <Link className='ml-4' to="/login">
    login
  </Link>
  </div>

</form>

    </div>
  )
}
