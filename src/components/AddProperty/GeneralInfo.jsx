import React, { useState } from 'react'

import { BsFillCameraFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import Menubar from '../Dashboard/Menubar';
import Header from '../Header';


function GeneralInfo({ formData, setFormData, isTogle, setIsTogle }) {
    const navigate = useNavigate()
    const [fileName, setFileName] = useState("Add Photo");

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

                                <label htmlFor="Name">Name</label>
                                <input type="text" placeholder='Owner'
                                    onChange={ (e) => { setFormData({ ...formData, name: e.target.value }); } }
                                    value={ formData.name } />

                                <label htmlFor='Posted By'>Posted By</label>
                                <input type="text" id='Posted By' placeholder='Posted By'
                                    onChange={ (e) => { setFormData({ ...formData, postedBy: e.target.value }); } }
                                    value={ formData.postedBy } />

                                <label htmlFor='Featured Package'>Featured Package</label>
                                <select name="Featured Package" id='Featured Package'
                                    onChange={ (e) => { setFormData({ ...formData, featuredPackage: e.target.value }); } }
                                    value={ formData.featuredPackage }>
                                    <option value="" disabled selected>Featured Package</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option >6</option>
                                    <option >7</option>
                                </select>

                                <input onChange={ (e) => {
                                    setFileName(e.target.value.split("\\").pop())

                                } }
                                    type="file" name="PostImage" id="file" className="inputfile" style={ { display: "none" } } />

                                <label id='image' className='buttonLabel' htmlFor="file">
                                    <BsFillCameraFill color='white' size={ 30 } />
                                </label>&nbsp;&nbsp;
                                <p style={ { display: 'inline-block' } } >{ fileName }</p>

                            </div>

                            <div className="rightFormBox">

                                <label htmlFor='Mobile'>Mobile*</label>
                                <input placeholder='Your 10 digit Phone Number' type="number" name="country_code" title="Error Message" pattern="[1-9]{1}[0-9]{9}"
                                    onChange={ (e) => { setFormData({ ...formData, mobile: e.target.value }); } }
                                    value={ formData.mobile } required minLength={ 10 } />

                                <label htmlFor='Sale Type'>Sale Type</label>
                                <select name="Sale Type" id='Sale Type'
                                    onChange={ (e) => { setFormData({ ...formData, saleType: e.target.value }); } }
                                    value={ formData.saleType }>
                                    <option value="" disabled selected>Select Sale Type</option>
                                    <option >Direct</option>
                                    <option >Auction</option>
                                </select>

                                <label htmlFor='PPD Package'>PPD Package</label>
                                <select name="PPD Package" id='PPD Package'
                                    onChange={ (e) => { setFormData({ ...formData, ppdPackage: e.target.value }); } }
                                    value={ formData.ppdPackage }>
                                    <option value="" disabled selected>Select PPD Package</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>


                                <label htmlFor='space' style={ { visibility: 'hidden' } }>Space</label>
                                <input type="text" style={ { visibility: 'hidden' } } />

                                <label htmlFor='space' style={ { visibility: 'hidden' } }>Space</label>
                                <input type="text" style={ { visibility: 'hidden' } } />

                            </div>

                            <div className="buttonBox">

                                <button className="Previous" onClick={ () => {
                                    setIsTogle({ ...isTogle, propertyDetails: true, GeneralInfo: false })
                                    console.log(formData, isTogle)

                                } }>Previous</button>

                                <button className=" save" onClick={ (e) => {
                                    e.preventDefault();
                                    if (formData.mobile === "") { alert("Mobile is a mandatory field") }
                                    else {
                                        setIsTogle({ ...isTogle, LocationInfo: true, GeneralInfo: false })
                                        console.log(formData, isTogle)
                                        navigate('/add')
                                    }
                                } }>Save &#38; continue</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralInfo
