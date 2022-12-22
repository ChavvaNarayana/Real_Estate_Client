import React, { useState } from 'react';
import './src/components/Signup.css';
import axios from "axios";
const Signup = async()=> {
  const[data,setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const res = await axios.post(
    ``,
    data,
    {
      withCredentials: true,
    });
  const{username,email}=data;
  const{password,confirmPassword} = Number;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
    setData({...Number,[e.target.password]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault();
   if(password===confirmPassword){
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
        <input type="text" name='username' placeholder='username' value={username} onChange={changeHandler}/> <br/>
        <input type="email" name='email' placeholder='email id' value={email} onChange={changeHandler}/><br/>
        <input type="password" name='password' placeholder='password' value={password} onChange={changeHandler}/><br/>
        <input type="Password" name='confirmPassword' placeholder='confirmpassword' value={confirmPassword} onChange={changeHandler}/><br/>
        <button type="submit" className="submit-button">Sign Up</button>
       </form>
      </center>
      </div>
    </div>
  )
    
}

export default Signup;
