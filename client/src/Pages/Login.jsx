// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [emailAddress, setEmailAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(emailAddress + '  ' + password);
//     // Perform login logic here

//     // Redirect to the home page after successful login
//     history('/');
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-90 bg-gray-100">
//       <div className="w-30 bg-white rounded-lg shadow-lg p-4">
//         <h1 className="text-3xl font-semibold mb-4">Sign in to your account</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="form-label fw-bold fs-5">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={emailAddress}
//               onChange={(e) => setEmailAddress(e.target.value)}
//               className="form-control"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="form-label fw-bold fs-5">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary w-30"
//             style={{ backgroundColor: 'green', fontWeight: 'bold', color: 'white' }}
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-4 text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/Register" className="text-blue-600">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import {useContext, useState} from 'react'
import { AuthContext } from '../Context/AuthContext'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(AuthContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("I love this")
        login(email, password)
    }

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
       <div className={`bg-gray-400 rounded-lg p-5`}>
          <h1 className='my-3'>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setEmail(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Enter Email ' /><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} className='rounded mt-2 px-3 py-1' placeholder='Enter Password ' /><br/>
            <div className='flex justify-center'>
                <button disabled={!email || !password} className='bg-red-600 rounded-full mt-2 text-black px-3 py-1'>Login</button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default Login

