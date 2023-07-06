// Code Snippet 1

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
// import { Modal, Button } from 'react-bootstrap';

// export default function Profile() {
//   const { logout } = useAuth();
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = React.useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{
//         height: '100vh',
//         background: 'linear-gradient(to bottom, #F2F2F2, #FFFFFF)', // Background gradient
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       <div
//         className="card"
//         style={{
//           width: '400px',
//           borderRadius: '10px',
//           boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//           backgroundColor: '#FFFFFF',
//         }}
//       >
//         <div className="card-body" style={{ padding: '20px' }}>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreeYw1CRaIf6BEWbAdep_fvE-COVhHUiq5g&usqp=CAU"
//             alt="Profile"
//             style={{ width: '200px', height: '200px', borderRadius: '50%' }}
//           />
//           <div style={{ marginTop: '20px', textAlign: 'center' }}>
//             <h3 className="card-title" style={{ fontSize: '24px', marginBottom: '10px' }}>
//               Method Man
//             </h3>
//             <p className="card-text" style={{ fontSize: '16px', marginBottom: '5px' }}>
//               Username: Methodman
//             </p>
//             <p className="card-text" style={{ fontSize: '16px', marginBottom: '5px' }}>
//               Email: john.doe@example.com
//             </p>
//           </div>
//           <button
//             onClick={handleShowModal}
//             className="btn btn-primary"
//             style={{ width: '100%', fontSize: '16px', marginTop: '20px' }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Logout Successful</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>You have been logged out successfully.</Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleLogout}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }


// // Code snippet 2
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
// import { Modal, Button } from 'react-bootstrap';

// export default function Profile() {
//   const { logout } = useAuth();
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = React.useState(false);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const response = await fetch('/api/user');
//       const data = await response.json();
//       setUser(data);
//     } catch (error) {
//       console.log('Error fetching user:', error);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{
//         height: '100vh',
//         background: 'linear-gradient(to bottom, #F2F2F2, #FFFFFF)',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       <div className="card" style={{ height: '400px', backgroundColor: '#FFFFFF' }}>
//         <div className="card-body">
//           <div className="d-flex align-items-center mb-3">
//             <img
//               src={user?.profilePhoto}
//               alt="Profile"
//               className="mr-3"
//               style={{ width: '100px', height: '100px' }}
//             />
//             <div>
//               <h5 className="card-title">{user?.name}</h5>
//               <p className="card-text">Username: {user?.username}</p>
//               <p className="card-text">Email: {user?.email}</p>
//             </div>
//           </div>
//           <button onClick={handleShowModal} className="btn btn-primary">
//             Logout
//           </button>
//         </div>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Logout Successful</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>You have been logged out successfully.</Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleLogout}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Profile() {

  const {currentUser} = useContext(AuthContext)  


  return (
    <div>
      {
        currentUser && currentUser?
        <>
      <h4>Email: {currentUser && currentUser.email}</h4>
      {/* <h4>Created-at: {currentUser && currentUser.created_at}</h4>
      <h4>Updated-at: {currentUser && currentUser.updated_at}</h4> */}
        </>
        :
        <div className='text-info'>
            Login to view your profile details
        </div>
      }
    </div>
  )
}

