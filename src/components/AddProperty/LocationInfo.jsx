import React, { useState } from 'react'

import Menubar from '../Dashboard/Menubar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header from '../Header';
import Loading from '../Loading';

function LocationInfo({ formData, setFormData, isTogle, setIsTogle }) {
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false);
    const addProperty = async (e) => {
        e.preventDefault();
        if (formData.area === '' || formData.propertyType === "" || formData.mobile === "") {
            return alert('Area, Property Type and mobile is required is required')
        }

        formData.email = localStorage.getItem('email')
        setLoading(true);
        await axios.post('https://real-estate-by-rohit-team14.onrender.com/add', formData, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(function (response) {

            setFormData({
                propertyType: "",
                negotable: "",
                price: '',
                ownership: "",
                propertyAge: "",
                propertyApproved: "",
                propertyDescription: "",
                bankLoan: "",
                length: '',
                breath: '',
                totalArea: '',
                areaUnit: "",
                noOfBHK: '',
                noOfFloor: '',
                attached: "",
                western: "",
                furnished: "",
                carParking: "",
                lift: "",
                electricity: "",
                facing: "",
                name: "",
                mobile: '',
                postedBy: "",
                saleType: "",
                featuredPackage: "",
                ppdPackage: "",
                email: "",
                city: "",
                area: "",
                pincode: '',
                address: "",
                landmark: "",
                latitude: "",
                longitude: ""
            })
            navigate('/')

        }).catch(function (error) {
            alert(error)
        }).finally(() => setLoading(false))
    }


    const token = localStorage.getItem("token");
    if (token === undefined) {
        alert("login to continue")
        navigate('/')
    }
    return (
        <>
            <div className="container">
                <div className="left">
                    < Menubar />
                </div>
                <div className="right">
                    <Header username={ localStorage.getItem('username') } userId={ localStorage.getItem('userId') } />
                    <h4 className="addANewProperty">
                        Add new Property
                    </h4>
                    

                    <div className="progress">

                        <div className="BasicInfo" onClick={ () => {
                            setIsTogle(prev => {

                                return {
                                    BasicInfo: true,
                                    propertyDetails: false,
                                    GeneralInfo: false,
                                    LocationInfo: false
                                }
                            })
                        } } style={ { backgroundColor: isTogle.BasicInfo ? '#6AB4F8' : "white", color: isTogle.BasicInfo ? 'white' : "#AAAAAA" } }>
                            <p>1</p> &nbsp;&nbsp;
                            <p>Basic Info</p>
                        </div>

                        <div className="PropertyDetail" onClick={ () => {
                            setIsTogle(prev => {

                                return {
                                    BasicInfo: false,
                                    propertyDetails: true,
                                    GeneralInfo: false,
                                    LocationInfo: false
                                }
                            })
                        } } style={ { backgroundColor: isTogle.propertyDetails ? '#6AB4F8' : "white", color: isTogle.propertyDetails ? "white" : "#AAAAAA" } }>
                            <p>2</p>&nbsp;&nbsp;
                            <p>Property  Detail</p>
                        </div>

                        <div className="GeneralInfo" onClick={ () => {

                            setIsTogle(prev => {
                                return {
                                    BasicInfo: false,
                                    propertyDetails: false,
                                    GeneralInfo: true,
                                    LocationInfo: false
                                }
                            })
                        } } style={ { backgroundColor: isTogle.GeneralInfo ? '#6AB4F8' : "white", color: isTogle.GeneralInfo ? "white" : "#AAAAAA" } }>
                            <p>3</p>&nbsp;&nbsp;
                            <p>General Info</p>
                        </div>

                        <div className="LocationInfo" onClick={ () => {

                            setIsTogle(prev => {
                                return {
                                    BasicInfo: false,
                                    propertyDetails: false,
                                    GeneralInfo: false,
                                    LocationInfo: true
                                }
                            })
                        } } style={ { backgroundColor: isTogle.LocationInfo ? '#6AB4F8' : "white", color: isTogle.LocationInfo ? "white" : "#AAAAAA" } }>
                            <p>4</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>

                    </div>

                    <div className="formBox">

                        <form action="">
                            <div className="leftFormBox">

                                <label htmlFor="Email">Email</label>
                                <input type="text" id='Email' placeholder='Email'
                                    onChange={ (e) => { setFormData({ ...formData, email: e.target.value }); } }
                                    value={ formData.email } />

                                <label htmlFor='Area'>Area</label>
                                <input type="Area" id='Area' placeholder='Area'
                                    onChange={ (e) => { setFormData({ ...formData, area: e.target.value }); } }
                                    value={ formData.area } />

                                <label htmlFor='Address'>Address</label>
                                <input type="text" placeholder='Address'
                                    onChange={ (e) => { setFormData({ ...formData, address: e.target.value }); } }
                                    value={ formData.address } />

                                <label htmlFor='Latitude'>Latitude</label>
                                <input type="text" id='Latitude' placeholder='Latitude'
                                    onChange={ (e) => { setFormData({ ...formData, latitude: e.target.value }); } }
                                    value={ formData.latitude } />

                            </div>

                            <div className="rightFormBox">

                                <label htmlFor='City'>City</label>
                                <input type="text" placeholder='City'
                                    onChange={ (e) => { setFormData({ ...formData, city: e.target.value }); } }
                                    value={ formData.city } />

                                <label htmlFor='Pincode'>Pincode</label>
                                <input type="" placeholder='Pincode'
                                    onChange={ (e) => { setFormData({ ...formData, pincode: e.target.value }); } }
                                    value={ formData.pincode } />

                                <label htmlFor='Landmark'>Landmark</label>
                                <input type="text" placeholder='Landmark'
                                    onChange={ (e) => { setFormData({ ...formData, landmark: e.target.value }); } }
                                    value={ formData.landmark } />

                                <label htmlFor='Longitude'>Longitude</label>
                                <input type="text" placeholder='Longitude'
                                    onChange={ (e) => { setFormData({ ...formData, longitude: e.target.value }); } }
                                    value={ formData.longitude } />
                                
                            </div>
                            {isLoading && <Loading />}
                            <div className="buttonBox">

                                <button className="Previous" onClick={ (e) => {
                                    e.preventDefault();

                                    setIsTogle({ ...isTogle, GeneralInfo: true, LocationInfo: false, })



                                } }>Previous</button>
                                
                                <button className="Add Property" onClick={ addProperty } > Add Property </button>

                            
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationInfo
