import React, { useState } from 'react'

import React, { useState } from 'react';
import './Signup.css';
import './Signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const apiUrl = 'http://localhost:5000/register'
const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const changeHandler = e => {
        const { name, value } = e.target
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
        <div className="sign-up-parent" >
            <div className="sign-up-form-container">
                <center>
                    <h1 style={ { color: "#4c57b6" } }>Logo</h1>
                    <p>Create New Account</p>
                    <form onSubmit={ submitHandler }>
                        <input type="text" name='username' placeholder='username' value={ data.username } onChange={ changeHandler } /> <br />
                        <input type="email" name='email' placeholder='email id' value={ data.email } onChange={ changeHandler } /><br />
                        <input type="password" name='password' placeholder='password' value={ data.password } onChange={ changeHandler } /><br />
                        <input type="Password" name='confirmPassword' placeholder='confirmpassword' value={ data.confirmPassword } onChange={ changeHandler } /><br />
                        <button type="submit" className="submit-button">Sign Up</button>
                    </form>
                </center>
            </div>
        </div >
    )
}


export default Signup;