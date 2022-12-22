import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlinePlus } from 'react-icons/ai'
function Search({ setId, ppdId}) {
  function handleChange(e) {
    setId(e.target.value.toUpperCase())
  }
  return (
    <div className='search-container flex flex-row space-between mx-5 my-5'>
      <div className="search-input flex flex-row items-center px-5">
        <input autoFocus={ false }
          onChange={ (e) => handleChange(e) }
          value={ppdId}
          autoComplete='off'
          type="text"
          name="search"
          id="search"
          placeholder='Search PPD ID' /> <RxDividerVertical color='#6AB4F8' size={40}opacity={0.3} /> <BiSearch color='#6AB4F8' size={24}opacity={0.8} />
      </div>
      <div className="add-property">
        <button className='add-btn'> <AiOutlinePlus/> Add Property</button>
      </div>

    </div>
  )
}

export default Search