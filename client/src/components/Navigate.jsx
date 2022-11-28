import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from "../context/MainContext";
import { post } from "../api/http";

const Nav = () => {
  const { sessionUser, setSessionUser } = useContext(MainContext)
  const nav = useNavigate()

  return (
    <div>
      <div>
        <button onClick={() => nav('/upload')} >Upload new offer</button>
      </div>

      <div>
        <h4>Logged in as: {sessionUser}</h4>
      </div>
    </div >
  )
};

export default Nav
