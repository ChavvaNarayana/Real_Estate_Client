import React from 'react'
import loading from '../images/loading.gif'
function Loading() {
  return (
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <img src={ loading } alt="loading-gif" width='50rem' height='50rem' />
      </div>
  )
}

export default Loading