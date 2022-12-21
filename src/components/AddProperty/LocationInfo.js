import React from 'react'
import './LocationInfo.css'
import Menubar from '../Dashboard/menubar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import GeneralInfo from './Genralnfo';



function LocationInfo({ formData, setFormData, isTogle, setIsTogle }) {
    const navigate = useNavigate()
    const addProperty = (e) => {
        e.preventDefault();

        // submit data can be implemented later
        // issue with tokens can be reolved later

        const addProperty = (e) => {
            e.preventDefault();

            axios.post('http://localhost:5000/api/property', formData,
                {
                    headers: {
                        authorization: localStorage.getItem('token')
                    }

                })
                .then(function (response) {
                    console.log(response)
                    console.log(response.data);
                    alert(response.data.message);
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
                    if (response.data.message === "success") {
                        navigate('/dashboard')
                    }
                })
                .catch(function (error) {
                    alert(error)
                });
        }
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
                    <h4 className="addANewProperty">
                        Add new Property
                    </h4>

                    <div className="progress">


                        <div className="BasicInfo1">
                            <p>1</p> &nbsp;&nbsp;
                            <p>Basic Info</p>
                        </div>


                        <div className="PropertyDetail">
                            <p>2</p>&nbsp;&nbsp;
                            <p>Property  Detail</p>
                        </div>



                        <div className="GeneralInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>General Info</p>
                        </div>


                        <div className="LocationInfo1">
                            <p>3</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>

                    </div>
                    <div className="formBox">
                        <form action="">
                            <div className="leftFormBox">
                                <label htmlFor="Email">Email</label>
                                <input type="text" id='Email' placeholder='Email'
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                    }}
                                    value={formData.email}
                                />
                                <label htmlFor='Area'>Area</label>
                                <input type="Area" id='Area' placeholder='Area'
                                    onChange={(e) => {
                                        setFormData({ ...formData, area: e.target.value });
                                    }}
                                    value={formData.area}
                                />

                                <label htmlFor='Address'>Address</label>
                                <input type="text" placeholder='Address'
                                    onChange={(e) => {
                                        setFormData({ ...formData, address: e.target.value });
                                    }}
                                    value={formData.address}
                                />
                                <label htmlFor='Latitude'>Latitude
                                </label>
                                <input type="text" id='Latitude' placeholder='Latitude'
                                    onChange={(e) => {
                                        setFormData({ ...formData, latitude: e.target.value });
                                    }}
                                    value={formData.latitude}
                                />
                            </div>
                            <div className="rightFormBox">
                                <label htmlFor='City'>City</label>
                                <input type="text" placeholder='City'
                                    onChange={(e) => {
                                        setFormData({ ...formData, city: e.target.value });
                                    }}
                                    value={formData.city}
                                />
                                <label htmlFor='Pincode'>Pincode</label>
                                <input type="number" placeholder='Pincode'
                                    onChange={(e) => {
                                        setFormData({ ...formData, pincode: e.target.value });
                                    }}
                                    value={formData.pincode}
                                />
                                <label htmlFor='Landmark'>Landmark</label>
                                <input type="text" placeholder='Landmark'
                                    onChange={(e) => {
                                        setFormData({ ...formData, landmark: e.target.value });
                                    }}
                                    value={formData.landmark}
                                />
                                <label htmlFor='Longitude'>Longitude</label>
                                <input type="text" placeholder='Longitude'
                                    onChange={(e) => {
                                        setFormData({ ...formData, longitude: e.target.value });
                                    }}
                                    value={formData.longitude}
                                />
                            </div>

                            <div className="buttonBox">
                                <button className="Previous" onClick={(e) => {
                                    e.preventDefault();
                                    {
                                        setIsTogle({
                                            ...isTogle, GenralInfo: true, LocationInfo: false,

                                        })
                                        console.log(formData, isTogle)
                                        navigate('/')
                                    }
                                }}>
                                    Previous
                                </button>
                                <button className="Add Property"
                                    onClick={addProperty}
                                >
                                    Add Property
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationInfo
