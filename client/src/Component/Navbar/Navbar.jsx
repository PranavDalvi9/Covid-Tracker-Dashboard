import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../Redux/Login/Action'

export default function Navbar() {
  const dispatch = useDispatch()
  const isAuth = useSelector((store) => store.isAuth)
  console.log("issad", isAuth)
  const navigate = useNavigate()
  return (
    <div className='NavBarDiv'>
      <p onClick={() => navigate("/")}>Home</p>
      {/* <p onClick={() => navigate("/sign-in")}>Login</p> */}

      {/* <p>Countries</p> */}

      {
        isAuth === true ? <><p onClick={() => { navigate("/contries") }}>Countries</p></> : <></>
      }

      {
        isAuth === true ? <><p onClick={() => { navigate("/sign-in"); dispatch(logout()) }}>Logout</p></> : <> <p onClick={() => navigate("/sign-in")}>Login</p></>
      }



      {/* <p onClick={() => {navigate("/sign-in") ;dispatch(logout()) }}>Logout</p> */}
    </div>
  )
}
