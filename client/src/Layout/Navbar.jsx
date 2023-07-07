import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

export default function Navbar() 
{

  const {currentUser, logout} = useContext(AuthContext)  
    console.log("user from navbar,");

    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-primary mt-3">
        <div className="container">

        <a className="navbar-brand fw-bolder" href="/"><h2>Real Estate</h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>

        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <Link to="/Home" className="nav-link active" aria-current="page" >Home</Link>
            </li>

            {currentUser && currentUser.email?(
              <React.Fragment>

            <li className="nav-item">
                <Link to="/ApproveProperty" className="nav-link active">Approve Property</Link>
            </li>
    
            <li className="nav-item">
                <Link to="/AddProperty" className="nav-link active" >Add Property</Link>
            </li>

            <li className="nav-item dropdown">
                 <Link to="/Profile" className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>          
                <ul className="dropdown-menu">
                <li><Link to="/Profile" className="dropdown-item" href="#">Current User</Link></li>

                  {/* <li><hr className="dropdown-divider" /></li> */}
                <li><a className="dropdown-item" href='#' onClick={() => logout()}>Logout</a></li>
                </ul>
            </li>

            </React.Fragment>)

            :

            <div>

            <li className="nav-item">
            <Link to="/Login" className="nav-link active" >Login</Link>
            </li>

            <li className="nav-item">
            <Link to="/register" className='nav-link active'>Register</Link>
            </li>

            </div>

            }
            
            



        </ul>
        </div>
        
        </div>
        </nav>
        </div>

    )
}