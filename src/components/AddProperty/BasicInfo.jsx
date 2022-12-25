
import Menubar from '../Dashboard/Menubar';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function BasicInfo({ formData, setFormData, isTogle, setIsTogle }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <div className="left">
                    <Menubar />
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
                                <label htmlFor="Property-Type">Property Type *</label>
                                <select name="Property-Type" id="Property-Type" onChange={ (e) => {
                                    setFormData({ ...formData, propertyType: e.target.value });
                                } }
                                    value={ formData.propertyType } required
                                >
                                    <option value="" disabled selected>Select Property Type</option>
                                    <option >Plot</option>


                                    <option >House</option>
                                    <option >Apartment</option>
                                    <option >Bungalow</option>
                                    <option >Villa</option>
                                </select>
                                <label htmlFor='price'>Price</label>

                                <input type="" id='price' placeholder='Example: 10000'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, price: e.target.value });
                                    } }
                                    value={ formData.price }
                                />

                                <label htmlFor='Property Age'
                                >Property Age</label>
                                <select name="Property Age" id='Property Age'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, propertyAge: e.target.value });
                                    } }
                                    value={ formData.propertyAge }
                                >
                                    <option value="" disabled selected>Select Property Age</option>
                                    <option >Less than 5 years</option>
                                    <option >More than 5 years</option>
                                </select>
                                <label htmlFor='Property Description'>Property Description
                                </label>
                                <input type="text" id='Property Description'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, propertyDescription: e.target.value });
                                    } }
                                    value={ formData.propertyDescription }
                                />
                            </div>
                            <div className="rightFormBox">
                                <label htmlFor='Negotiable'>Negotiable</label>
                                <select name="Negotiable" id='Negotiable'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, negotable: e.target.value });
                                    } }
                                    value={ formData.negotable }
                                >
                                    <option value="" disabled selected>Negotiable</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label htmlFor='ownership'>Ownership</label>
                                <select name="ownership" id='ownership'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, ownership: e.target.value });
                                    } }
                                    value={ formData.ownership }
                                >
                                    <option value="" disabled selected>Select Ownership</option>
                                    <option >Individual</option>
                                    <option >Joint</option>
                                </select>
                                <label htmlFor='Property Approved'>Property Approved</label>
                                <select name="Property Approved" id='Property Approved'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, propertyApproved: e.target.value });
                                    } }
                                    value={ formData.propertyApproved }
                                >
                                    <option value="" disabled selected>Select Property Approved</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label htmlFor='Bank Loan'>Bank Loan</label>
                                <select name="Bank Loan" id='Bank Loan'
                                    onChange={ (e) => {
                                        setFormData({ ...formData, bankLoan: e.target.value });
                                    } }
                                    value={ formData.bankLoan }
                                >
                                    <option value="" disabled selected>Select Bank Loan</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                            </div>

                            <div className="buttonBox">
                                <button className="cancel" onClick={ () => {
                                    setFormData({
                                        propertyType: "",
                                        negotiable: "",
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
                                        noOfBHK: "",
                                        noOfFloor: "",
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
                                        pincode: "",
                                        address: "",
                                        landmark: "",
                                        latitude: "",
                                        longitude: ""
                                    })
                                    navigate('/')
                                } }>Cancel</button>

                                <button className="save"
                                    onClick={ (e) => {
                                        e.preventDefault();
                                        if (formData.propertyType === "") {
                                            alert("PropertyType is a Mandatory Field")
                                            return false;
                                        }
                                        else {
                                            setIsTogle({
                                                ...isTogle, propertyDetails: true, BasicInfo: false
                                            })
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

export default BasicInfo
