import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from "../context/MainContext";
import { post } from "../api/http";

const Navbar = () => {
  const { sessionUser, setSessionUser } = useContext(MainContext)
  const nav = useNavigate()

  const logout = async () => {
    console.log('logout')
    const data = { name: sessionUser }
    console.log(data)

    const res = await post('logout', data)
    if (res.message === 'session terminated') setSessionUser('')
    nav('/')
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <nav>
          <div>
            <Link className='navbar-link' to='/'>Home</Link>
            <Link className='navbar-link' to='/login'>Log In</Link>
            <Link className='navbar-link' to='/auction'>Auction</Link>
          </div>

          <div className='logout-button'>
            <button onClick={logout}>Logout </button>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Navbar