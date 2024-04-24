import { STATES } from 'mongoose'
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import {  NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
      <div class="container-fluid">
    <a class="navbar-brand"> <NavLink to="/" className='sun'><img src="./images/logo.jpeg" class="rounded-circle " width={80}/> <a className='logo'>SUNProducts</a> </NavLink> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <NavLink to='/' class="nav-link" className='pages'> <h5>Home &emsp; </h5> </NavLink>
        </li>
       <li>
        <a class="nav-item" className='pages'> <NavLink to='/product' className='pages navlink' > <h5>Products </h5>  </NavLink> </a>
    </li>
     </ul>
     <div className='buttons'>
      <a href='' className='btn btn-outline-danger'>
       <NavLink to='/login' className="loginn">
        Login</NavLink> </a>&emsp;       
          <NavLink to="/cart" className="btn btn-outline-danger ms-2">
        <a className="loginn" > Cart   </a> </NavLink>
      </div> 
        </div>   
    </div>
    </nav>

    </>
  
    
  )
}
