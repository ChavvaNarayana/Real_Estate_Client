const Location = (props) => {
    return (

        <form >

            <div>
                <label >Email</label><br></br>
                <input type="email" placeholder="Email" />
            </div>

            <div>
                <label >City</label><br></br>
                <input type="text" placeholder="Select City " />
            </div>

            <div>
                <label >Area</label><br></br>
                <input type="text" placeholder="select Area" />
            </div>

            <div>
                <label >Pincode</label><br></br>
                <input type="text" placeholder="Select Pincode " />
            </div>

            <div>
                <label >Address</label><br></br>
                <input type="text" placeholder="Address " />
            </div>

            <div>
                <label >Landmark</label><br></br>
                <input type="text" placeholder="Landmark" />
            </div>

            <div>
                <label >Latitude</label><br></br>
                <input type="text" placeholder="Latitude" />
            </div>

            <div>
                <label >Longitude</label><br></br>
                <input type="text" placeholder="Longitude" />
            </div>

        </form>
    )

}
export default Location;