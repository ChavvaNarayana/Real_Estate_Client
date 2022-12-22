import React, { useState } from 'react'
import './Signin.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <center>

          <h1 style={ { color: "#4c57b6" } }>Logo</h1>
          <p>Create New Account</p>
          <form onSubmit={ submitHandler }>
            <input type="email" name='email' placeholder='email id' value={ data.email } onChange={ changeHandler } /><br />
            <input type="password" name='password' placeholder='password' value={ data.password } onChange={ changeHandler } /><br />
            <button type="submit" className="submit-button">Sign In</button><br />
            <Link to='/register'>SignUp</Link>

          </form>
        </center>
      </div>
      <div>
        <p className="para">
          Don't have an account?
          <Link to="/register">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )

}

export default Signin;
