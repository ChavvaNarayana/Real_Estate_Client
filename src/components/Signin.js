import React, { useState } from 'react'
import './Signin.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import eye from "../images/eye.png";
const apiUrl = 'http://localhost:5000/login'
const Signin =  () => {
  const [data, setData] = useState({email: '',password: ''})
  const navigate = useNavigate()
  const changeHandler = e => {
    const {name, value} = e.target
    setData(data => { 
      return { ...data, [name]: value }
     })

  }
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(apiUrl, { data }).then(res => res.data)
      .then(data => {
        localStorage.setItem('userId', data.ppdId)
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)
        localStorage.setItem('token', data.token)
        navigate('/')
      })
      .catch(err => console.log(err))
    

  }
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <center>

          <h1 style={ { color: "#4c57b6" } }>Logo</h1>
          <p>Enter Your Credentials to access your account</p><br/>
          <form onSubmit={ submitHandler }>
            <input type="email" name='email' placeholder='User id' value={ data.email } onChange={ changeHandler } /><br />
            <input type="password" name='password' placeholder='Password' value={ data.password } onChange={ changeHandler } />
            <span
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img src={eye} alt="no data" />
            </span>
            
            <br />
            <button type="submit" className="submit-button">Sign In</button><br/>
            <Link to='/register' style={{ textDecoration: 'none' }}>Sign Up</Link>

          </form>
        </center>
      </div>
      <div>
        <p className="para">
          Don't have an account?
          <Link to="/register" style={{ textDecoration: 'none' }}>
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )

}

export default Signin;