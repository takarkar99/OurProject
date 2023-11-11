import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { SiWebmoney } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import './NavBar.css'

const email = JSON.parse(localStorage.getItem("email"));

const NavBarCustomer = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    navigate('/Home');
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand"><SiWebmoney style={{fontSize:"60px", color:"gold"}}/><b style={{color:"rgb(28, 169, 226)", marginLeft:"30px", fontSize:"25px"}}><span style={{fontSize:"35px"}}>U</span>nique <span style={{fontSize:"35px"}}>L</span>oan <span style={{fontSize:"35px"}}>S</span>ervices</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/usershow">Show Users For Customer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">PAY_EMI</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="#">FAQ's</NavLink>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;
        <li>
          <span style={{color:'red'}}>CUSTOMER {email}</span>
         <button onClick={logout} className='btn btn-danger'>Logout</button>
         </li>
        <li>
            <FaFacebookSquare className='me-3' style={{color:"blue", fontSize:"30px", marginLeft:"230px"}}/>
        </li>
        <li>
            <FaInstagramSquare className='me-3' style={{color:"rgb(227, 27, 114)", fontSize:"30px"}}/>
            <FaYoutubeSquare style={{color:"red", fontSize:"30px"}}/>
        </li>
        
      </ul>
    </div>
  </div>
  </nav>
    </div>
  )
}

export default NavBarCustomer
