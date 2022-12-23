import React from 'react'
import './propertyDetail.css'
import Menubar from '../Dashboard/menubar';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

// import BasicInfo from './BasicInfo';


function PropertyDetails({ formData, setFormData, isTogle, setIsTogle }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="container">

                <div className="left">
                    <Menubar />
                </div>

                <div className="right">
                    <Header />
                    <h4 className="addANewProperty">
                        Add new Property
                    </h4>

                    <div className="progress">-
                        <div className="BasicInfo1">
                            <p>1</p> &nbsp;&nbsp;
                            <p>Basic Info</p>
                        </div>

                        <div className="PropertyDetail1">
                            <p>2</p>&nbsp;&nbsp;
                            <p>Property  Detail</p>
                        </div>

                        <div className="GeneralInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>General Info</p>
                        </div>

                        <div className="LocationInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>
                    </div>

                    <div className="formBox">

                        <form action="">
                            <div className="leftFormBox">

                                <label htmlFor="Length">Length</label>
                                <input type="number" placeholder='Example 1000'
                                    onChange={(e) => {
                                        setFormData({ ...formData, length: e.target.value });
                                    }}
                                    value={formData.length} />

                                <label htmlFor='Total Area'>Total Area</label>
                                <input type="number" id='total area' placeholder='Example: 7500'
                                    onClick={() => {
                                        setFormData({ ...formData, totalArea: (formData.length * formData.breath) });
                                    }}
                                    value={formData.totalArea} />

                                <label htmlFor='Number of BHK'>No of BHK</label>
                                <select name="Number of BHK" id='Number of BHK'
                                    onChange={(e) => {
                                        setFormData({ ...formData, noOfBHK: e.target.value });
                                    }}
                                    value={formData.noOfBHK}>
                                    <option value="" disabled selected>Select Number of BHK</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option >6</option>
                                    <option >7</option>
                                </select>

                                <label htmlFor='Attached'>Attached</label>
                                <select name="Attached" id='Attached'
                                    onChange={(e) => {
                                        setFormData({ ...formData, attached: e.target.value });
                                    }}
                                    value={formData.attached}>
                                    <option value="" disabled selected>Select Attached</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                                <label htmlFor='Furnished'>Furnished</label>
                                <select name="Furnished" id='Furnished'
                                    onChange={(e) => {
                                        setFormData({ ...formData, furnished: e.target.value });
                                    }}
                                    value={formData.furnished}>
                                    <option value="" disabled selected>Select Furnished</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                                <label htmlFor='Lift'>Lift</label>
                                <select name="Lift" id='Lift'
                                    onChange={(e) => { setFormData({ ...formData, lift: e.target.value }); }}
                                    value={formData.lift}>
                                    <option value="" disabled selected>Select Lift</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                                <label htmlFor='Facing'>Facing</label>
                                <select name="Facing" id='Facing'
                                    onChange={(e) => { setFormData({ ...formData, facing: e.target.value }); }}
                                    value={formData.facing}>
                                    <option value="" disabled selected>Select Facing</option>
                                    <option >North</option>
                                    <option >North-East</option>
                                    <option >North-West</option>
                                    <option >South</option>
                                    <option >South-East</option>
                                    <option >South-West</option>
                                    <option >East</option>
                                    <option >West</option>
                                </select>
                            </div>

                            <div className="rightFormBox">

                                <label htmlFor='Breadth'>Breadth</label>
                                <input type="number" name="Breadth" id="Breadth" placeholder='Example: 1000'
                                    onChange={(e) => { setFormData({ ...formData, breath: e.target.value }); }}
                                    value={formData.breath} />

                                <label htmlFor='Area Unit'>Area Unit</label>
                                <select name="Area Unit" id='Area Unit'
                                    onChange={(e) => { setFormData({ ...formData, areaUnit: e.target.value }); }}
                                    value={formData.areaUnit}>
                                    <option value="" disabled selected>Select Area Unit</option>
                                    <option >sq ft</option>
                                    <option >sq cm</option>
                                </select>

                                <label htmlFor='No of Floors'>No of Floors</label>
                                <select name="No of Floors" id='No of Floors'
                                    onClick={(e) => { setFormData({ ...formData, noOfFloor: e.target.value }); }}
                                    value={formData.noOfFloor}>
                                    <option value="" disabled selected>Select No of Floors</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>

                                <label htmlFor='Western Toilet'>Western Toilet</label>
                                <select name="Western Toilet" id='Western Toilet'
                                    onChange={(e) => { setFormData({ ...formData, western: e.target.value }); }}
                                    value={formData.western}>
                                    <option value="" disabled selected>Select Western Toilet</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                                <label htmlFor='Car Parking'>Car Parking</label>
                                <select name="Car Parking" id='Car Parking'
                                    onChange={(e) => { setFormData({ ...formData, carParking: e.target.value }); }}
                                    value={formData.carParking}>
                                    <option value="" disabled selected>Select Car Parking</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                                <label htmlFor='Electricity'>Electricity</label>
                                <input type="text" placeholder='Example: 3 Phase'
                                    onChange={(e) => { setFormData({ ...formData, electricity: e.target.value }); }}
                                    value={formData.electricity} />
                                <label htmlFor='space' style={{ visibility: 'hidden' }}>Space</label>
                                <input type="text" style={{ visibility: 'hidden' }} />

                            </div>

                            <div className="buttonBox1">
                                <button className="Previous" onClick={() => {
                                    setIsTogle({ ...isTogle, BasicInfo: true, propertyDetails: false, })
                                    console.log(formData, isTogle)
                                    navigate('/add')
                                }}>Previous</button>

                                <button className=" save" onClick={(e) => {
                                    e.preventDefault();
                                    if (formData.length === "") {
                                        alert("Length is a mandatory field")
                                    }
                                    else if (formData.breath === "") {
                                        alert("Breadth is a mandatory field")
                                    }
                                    else if (formData.totalArea === "") {
                                        alert("Click on total area section to get automatically calculated area")
                                    }
                                    else {
                                        setIsTogle({ ...isTogle, GeneralInfo: true, propertyDetails: false, })
                                        console.log(formData, isTogle)
                                        navigate('/add')
                                    }
                                }}>Save &#38; continue</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyDetails
