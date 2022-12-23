import React, { useState } from 'react'
import './Signin.css';
import axios from "axios";
import { BsEyeFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/Logo.png";
const apiUrl = 'http://localhost:5000/login'


const Signin =  () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [err, setErr]  = useState('');
  const changeHandler = e => {
    const {name, value} = e.target
    setData(data => { 
      return { ...data, [name]: value }
    })
    setErr('')
  }

  const handlePass = () => {
    const password = document.getElementById('login-password')
    const eye = document.getElementById('login-eye')
    if (showPassword) {
      eye.style.color = 'skyblue'
      password.type = 'text'

      setShowPassword(prev => !prev);
    } else {
      eye.style.color = '#DFDFDF'
      password.type = 'password'
      setShowPassword(prev => !prev);
    }
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.email === '' || data.password === '') {
      setErr('All Fields are necessary');
      return
    }
    setErr('')
    await axios.post(apiUrl, { data }).then(res => res.data)
      .then(data => {
        localStorage.setItem('userId', data.ppdId)
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)
        localStorage.setItem('token', data.token)
        navigate('/')
      })
      .catch(err => {
        if (err.response.status === 422 || err.response.status === 403) setErr('Email or Password is Incorrect.')
        else setErr('User isn"t registerd. Try Sign up')
        console.log(err);
      })
    

  }
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <center>

          <h1 style={ { color: "#4c57b6" } }>          <img src={ logo } alt="Logo" width='100em' height='100em'/></h1>
          <p>Enter Your Credentials to access your account</p><br/>
          <form onSubmit={ submitHandler }>
            <input className='focus' type="email" name='email' placeholder='User Email' value={ data.email } onChange={ changeHandler } /><br />
            <input id='login-password' className='focus' type="password" name='password' placeholder='Password' value={ data.password } onChange={ changeHandler } />
            <span className="login-eye" onClick={ handlePass}>
              <BsEyeFill id='login-eye' size={20} color='#DFDFDF'/>
            </span>
            
            <br />
            <button type="submit" className="submit-button scale-onhover">Sign In</button><br />
            <p style={ { color: 'red' } }>{ err }</p>
            <Link to='/register' style={{ textDecoration: 'none' }}>Sign Up</Link>

          </form>
        </center>
      </div>
      <div>
        <p className="para">
          Don't have an account ? 
          <Link to="/register" style={{ textDecoration: 'none', padding: "0.5rem" }}>
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )

}

export default Signin;