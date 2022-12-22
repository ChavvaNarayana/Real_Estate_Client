import React, { useState } from 'react'
import './Signin.css';
import axios from "axios";

const Signin = async () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const res = await axios.post(
    ``,
    data,
    {
      withCredentials: true,
    });

  const Link = ({ href, children }) => (
    <a href={href}>
      {children}
    </a>
  );
  const { email } = data;
  const { password } = Number;
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] })
    setData({ ...Number, [e.target.password]: [e.target.value] })
  }
  const submitHandler = e => {
    e.preventDefault();
    if (password == confirmPassword) {
      console.log(data);
    }
    else {
      console.log("Passwords not matching")
    }
  }
  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <center>
          <h1 style={{ color: "#4c57b6" }}>Logo</h1>
          <p>Create New Account</p>
          <form onSubmit={submitHandler}>
            <input type="email" name='email' placeholder='email id' value={email} onChange={changeHandler} /><br />
            <input type="password" name='password' placeholder='password' value={password} onChange={changeHandler} /><br />
            <button type="submit" className="submit-button">Sign In</button><br />
            <Link href="">SignUp</Link>
          </form>
        </center>
      </div>
      <div>
        <p className="para">
          Don't have an account?
          <Link href="">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )

}

export default Signin;
