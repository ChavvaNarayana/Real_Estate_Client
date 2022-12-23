import React, { useEffect, useState } from 'react'
import Header from './Header'
import Search from './Search'
import './Index.css'
import Menubar from './Dashboard/Menubar'
import Properties from './Properties'
import { Navigate } from "react-router-dom";
import axios from 'axios'
function IndexPage() {
  let [data, setDat] = useState([])
  let [ppdId, setPPId] = useState('');
  let token = localStorage.getItem("token");
  const apiUrl = 'http://localhost:5000'
  useEffect(() => {
    const getData = async () => {
      await axios({
        url: apiUrl,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "email": localStorage.getItem('email')
        }
      }).then((res) => setDat(res.data.properties)).catch(err => console.log(err))
    }
    getData()
  }, [])
  
  return (

    <>{ token ? <div className="container flex flex-row">
      <div className="side"><Menubar /></div>
      <div className="main flex-1">
        <Header username={ localStorage.getItem('username') } userId={ localStorage.getItem('userId') } />
        <Search setId={ setPPId } ppdId={ ppdId } />
        <Properties data={ data } ppdId={ ppdId } />
      </div>
    </div> : <Navigate to='/login' /> }


    </>
  )
}

export default IndexPage