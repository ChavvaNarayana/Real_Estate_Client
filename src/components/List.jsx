import React from 'react'
import { BsImages, BsEyeFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
function List({ppdId, property, contact, views, area, status, daysLeft,}) {
  return (
    <>
      
      <tr className='flex flex-row my-10'>
        <td style={{width:'13%'}}>{ ppdId }</td>
        <td style={ { width: '10%' } }><BsImages color='#C3C3C3' size={20}/></td>
        <td style={ { width: '12%' } }>{ property }</td>
          
        <td style={ { width: '13%' } }>{contact }</td>
        <td style={ { width: '10.5%' } }>{area }</td>
        <td style={ { width: '10%' } }>{views }</td>
        <td style={ { width: '12%' } } className='sold-un'>{status }</td>
        <td style={ { width: '10.5%' } }>{ daysLeft }</td>
          <td><BsEyeFill color='#DFDFDF' size={20} style={{marginRight:'1rem'}} /> <MdEdit color='#DFDFDF' size={20} /></td>
        </tr>
      
    </>
  )
}

export default List