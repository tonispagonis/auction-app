import React, { useContext, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { post } from "../api/http";


const Login = () => {
  const nav = useNavigate()
  const [verifyResult, setVerifyResult] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { setSessionUser } = useContext(MainContext)


  const loginNameRef = useRef()
  const loginPassRef = useRef()
  const registerNameRef = useRef()
  const registerPassOneRef = useRef()
  const registerPassTwoRef = useRef()


  const loginUser = async () => {

    setErrorMessage('')
    const data = {
      name: loginNameRef.current.value,
      pass: loginPassRef.current.value,

    }
    console.log(data)
    const res = await post('login', data)
    console.log(res)
    if (res.error === false) {
      setSessionUser(res.data)
      loginNameRef.current.value = ''
      loginPassRef.current.value = ''
      nav('/auction')
    }
    if (res.error === true) setErrorMessage(res.message)

  }

  const registerUser = async () => {
    setErrorMessage('')
    console.log(registerNameRef.current.value)
    console.log(registerPassOneRef.current.value)
    console.log(registerPassTwoRef.current.value)
    const data = {
      name: registerNameRef.current.value,
      passOne: registerPassOneRef.current.value,
      passTwo: registerPassTwoRef.current.value
    }
    const res = await post('register', data)
    console.log(res)
    setVerifyResult('')
    if (res.error === true) setErrorMessage(res.message)
    if (res.data === "badPass" || res.data === 'badName')
      setVerifyResult(res.data);
    if (res.error === false) {
      setSessionUser(res.data)
      registerNameRef.current.value = ''
      registerPassOneRef.current.value = ''
      registerPassTwoRef.current.value = ''
      nav('/login')
    }

  }



  return (
    <div className='login-form'>
  
      <h3>Log in or Sign up</h3>


      <div >

        <input type={'text'} ref={loginNameRef} placeholder={'Enter username'} />
        <input type={"password"} ref={loginPassRef} placeholder={'Enter password'} />
        <button onClick={loginUser}>Log in</button></div>
      <div >
        <input className={`${verifyResult === 'badName' ? 'invalid' : ''}`} type={'text'} ref={registerNameRef} placeholder={'Enter username'} />
        <input className={`${verifyResult === 'badPass' ? 'invalid' : ''}`} type={"password"} ref={registerPassOneRef} placeholder={'Enter password'} />
        <input className={`${verifyResult === 'badPass' ? 'invalid' : ''}`} type={"password"} ref={registerPassTwoRef} placeholder={'Repeat password'} />
        <button onClick={registerUser}>Sign up </button></div>
      <p style={{ color: 'red' }}>{errorMessage}</p>

    </div>
  );
};

export default Login;