import React, { useEffect, useState } from 'react'
import Header from './Header'
import Search from './Search'
import './Index.css'
import Menubar from './Dashboard/menubar'
import Properties from './Properties'
import { Navigate } from "react-router-dom";
import axios from 'axios'
function IndexPage() {
  let data = [
    {
      ppdId: 'PPD154',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 3400,
      views: 24,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD127',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 300,
      views: 4,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD114',
      propertyType: 'Apartment',
      mobile: '98346 23679',
      area: 770,
      views: 24,
      status: 'Unsold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD194',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 3400,
      views: 24,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD524',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 3400,
      views: 2,
      status: 'Unsold',
      daysleft: 3,
    },
    {
      ppdId: 'PPD424',
      propertyType: 'House',
      mobile: '9834623679',
      area: 340,
      views: 4,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD924',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 300,
      views: 24,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD824',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 3400,
      views: 24,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD129',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 300,
      views: 4,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD024',
      propertyType: 'Apartment',
      mobile: '98346 23679',
      area: 770,
      views: 24,
      status: 'Unsold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD524',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 3400,
      views: 24,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD424',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 3400,
      views: 2,
      status: 'Unsold',
      daysleft: 3,
    },
    {
      ppdId: 'PPD924',
      propertyType: 'House',
      mobile: '9834623679',
      area: 340,
      views: 4,
      status: 'Sold',
      daysleft: 23,
    },
    {
      ppdId: 'PPD164',
      propertyType: 'Apartment',
      mobile: '9834623679',
      area: 300,
      views: 24,
      status: 'Sold',
      daysleft: 23,
    },
  ]
  let [dat, setDat] = useState([])
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
      }).then((res) => setDat(res.data.properties)).catch(err=> console.log(err))
    }
    getData()
  }, [])
  console.log(dat)
  return (
    
    <>{ token ? <div className="container flex flex-row">
      <div className="side"><Menubar /></div>
      <div className="main flex-1">
        <Header username={localStorage.getItem('username')} userId = {localStorage.getItem('userId')} />
        <Search setId={ setPPId } ppdId={ ppdId } />
        <Properties data={ data } ppdId={ ppdId } />
      </div>
    </div> : <Navigate to='/login'/>}
     

    </>
  )
}

export default IndexPage