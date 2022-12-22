import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
function Header() {
  return (
    <header>
      <div className="head flex flex-row space-between mx-5">
        <div className="user-id lg-font">
            <h6>USER ID : </h6>
        </div>
        <div className="user-name lg-font">
          <h6 className='flex flex-row items-center'><div><AiOutlineUser color='#A6A6A6' size={ 22 } /></div><div> User Name</div><div><FiChevronDown color='#A6A6A6' /></div> </h6>
        </div>
        
      </div>
    </header>
  )
}

export default Header