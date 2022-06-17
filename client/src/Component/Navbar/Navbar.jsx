import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {

    const navigate = useNavigate()
  return (
    <div className='NavBarDiv'>
        <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/sign-in")}>Login</p>
    </div>
  )
}
