import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
function Header({ username, userId }) {
  const navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <header>
      <div className="head flex flex-row space-between mx-5 my-5 items-center">
        <div className="user-id lg-font">
          <h6>USER ID : { userId}</h6>
        </div>
        <div className="user-name lg-font">
          <h6 className='flex flex-row items-center'><div><AiOutlineUser color='#A6A6A6' size={ 22 } /></div><div>User Name : { username }</div><div><FiChevronDown color='#A6A6A6' /></div> </h6>
        <button onClick={logout}>Logout</button>
        </div>
        
      </div>
    </header>
  )
}

export default Header