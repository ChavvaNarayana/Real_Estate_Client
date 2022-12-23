import React, {useState} from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
function Header({ username, userId }) {
  const navigate = useNavigate()
  const [isLogout, setLogout] = useState(false)
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
        <div className="username-display flex flex-column">
          <div className='flex flex-row space-between'>
            <div><AiOutlineUser className='user-icons' size={ 30 } /></div>
            <div className='username' onClick={() => setLogout(prev => !prev)}>User Name : { username }</div>
            <div><FiChevronDown className='user-icons' /></div>
          </div>
          { isLogout && <button className='logout-btn' onClick={ logout }>Logout</button> }
        
        </div>
        
      </div>
    </header>
  )
}

export default Header