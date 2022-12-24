import React, { useState } from 'react'
import { BsImages, BsEyeFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
function List({ ppdId, property, contact, views, area, status, daysLeft, }) {
  const [isSold, setSold] = useState(status)
  const handleSold = () => {
    if (isSold === 'Sold') {
      setSold('Unsold')
    } else setSold('Sold')
  }
  return (
    <>
      
      <tr className='flex flex-row my-10'>
        <td style={{width:'13%'}}>{ ppdId }</td>
        <td className="cursor-pointer images" style={ { width: '10%' } }><BsImages size={20}/></td>
        <td style={ { width: '12%' } }>{ property }</td>
          
        <td style={ { width: '13%' } }>{contact }</td>
        <td style={ { width: '10.5%' } }>{area }</td>
        <td style={ { width: '11%' } }>{views }</td>
        <td className="cursor-pointer sold-un" onClick={handleSold} style={ { width: '12%' } }>{isSold}</td>
        <td style={ { width: '10%' } }>{ daysLeft }</td>
        <td><BsEyeFill className="cursor-pointer eye" size={ 20 } style={ { marginRight: '1rem' } } />
          <MdEdit  className="cursor-pointer edit" size={ 20 } />
        </td>
        </tr>
      
    </>
  )
}

export default List;