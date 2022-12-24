import React, { useState } from 'react'
import './Signup.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import logo from "../images/Logo.png";
const apiUrl = 'http://localhost:5000/register'
const Signup = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
        if (name === 'confirmPassword') {
            if (value !== data.password) {
                setErr('Password should match')
            }
            else setErr('');
        } else setErr('');

    }
    const handlePass = () => {
        const password = document.getElementById('register-password')
        const eye = document.getElementById('register-eye')
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
        if (data.username === '' || data.email === '' || data.password === '') {
            setErr('All Fields are necessary');
            return
        }
        setErr('')
        await axios.post(apiUrl, { data })
            .then(res => res.data)
            .then(data => {
                localStorage.setItem('userId', data.ppdId)
                localStorage.setItem('email', data.email)
                localStorage.setItem('username', data.username)
                localStorage.setItem('token', data.token)
                navigate('/')
            })
            .catch(err => {
                if (err.response.status === 409) setErr('User already exists with the given email. Try log in')
                else setErr('Something"s wrong, Try again')
                console.log(err);
            })
    }

    return (
        <div className="sign-up-parent" >
            <div className="sign-up-form-container">
                <center>
                    <br /> <h1 className='index-logo' style={ { margin: 0 } } >          <img src={ logo } alt="Logo" width='140em' height='140em' /></h1>
                    <p style={ { opacity: 0.8 } }>Create New Account</p><br />
                    <form onSubmit={ submitHandler }>
                        <input className='focus' type="text" name='username' placeholder='Name' value={ data.username } onChange={ changeHandler } /><br />
                        <input className='focus' type="email" name='email' placeholder='Email id' value={ data.email } onChange={ changeHandler } /><br />
                        <BsEyeFill id='register-eye' className='register-eye' size={ 20 } color='#DFDFDF' onClick={ handlePass } />
                        <input className='focus' type="password" name='password' id='register-password' placeholder='Password' value={ data.password } onChange={ changeHandler } minLength={ 6 } /><br />
                        <input className='focus' type="Password" name='confirmPassword' placeholder='Confirm Password' value={ data.confirmPassword } onChange={ changeHandler } /><br />
                        <button type="submit" className="submit-button scale-onhover">Sign Up</button>
                        <p style={ { color: 'red' } }>{ err }</p>
                    </form>
                </center>
            </div>
            <div>

            </div>
            <p className="para">
                <Link to="/login" style={ { textDecoration: 'none' } }>
                    Sign In
                </Link>
            </p>
        </div >
    )
}


export default Signup;