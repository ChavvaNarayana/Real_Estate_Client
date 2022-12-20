const Property = (props) => {

    return (

        <form>

            {/* Length */}
            <div>
                <label >Length</label><br></br>
                <input type="text" placeholder="Example: 10000" />
            </div>

            {/* Breath */}
            <div>
                <label >Breath</label><br></br>
                <input type="text" placeholder="Example: 10000" />
            </div>

            {/* Total Area */}
            <div>
                <label >Total Area</label><br></br>
                <input required type="text" placeholder="Example: 7500 " />
            </div>

            {/* Area Unit */}
            <div>
                <label >Area Unit</label><br></br>
                <input type={"text"} required placeholder="Area Unit" />
            </div>

            {/* No of BHK */}
            <div>
                <label >No of BHK</label><br></br>
                <select name="No of BHK" placeholder="Select No of BHK ">
                    <option value="" disabled selected>Select No of BHK </option>
                    <option value="1bhk">1BHk</option>
                    <option value="2bhk">2BHk</option>
                    <option value="3bhk">3BHk</option>
                    <option value="morethan">Morethan</option>
                </select>
            </div>

            {/* No of floor */}
            <div>
                <label >No of floor</label><br></br>
                <select name="No of floor" placeholder="Select No of Floor" >
                    <option value="" disabled selected>Select No of Floor </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="morethan">More than</option>
                </select>
            </div>

            {/* Attached */}
            <div>
                <label >Attached</label><br></br>
                <select name="Attached" placeholder="Select Attached" >
                    <option value="" disabled selected>Select Attached </option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                </select>
            </div>

            {/* Western Toilet */}
            <div>
                <label >Western Toilet</label><br></br>
                <select name="Western Toilet" placeholder="select Western Toilet" >
                    <option value="" disabled selected>Select Western Toilet</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                </select>
            </div>

            {/* Furnished */}
            <div>
                <label >Furnished</label><br></br>
                <select name="Furnished" placeholder="Select Furnished " >
                    <option value="" disabled selected>Select Furnished</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                </select>
            </div>

            {/* Car Parking */}
            <div>
                <label >Car Parking</label><br></br>
                <select name="Car Parking" placeholder="Select Car Parking " >
                    <option value="" disabled selected>Select Car Parking</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                </select>
            </div>

            {/* Lift */}
            <div>
                <label >Lift</label><br></br>
                <select name="Lift" placeholder="Select Lift" >
                    <option value="" disabled selected>Select Lift</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                </select>
            </div>

            {/* Electricity */}
            <div>
                <label >Electricity</label><br></br>
                <input type="text" placeholder="Example:3 Phase" />
            </div>

            {/* Facing */}
            <div>
                <label >Facing</label><br></br>
                <select name="Facing" placeholder="select Facing" >
                    <option value="" disabled selected>Select Facing</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="west">West</option>
                    <option value="east">East</option>
                </select>
            </div>

        </form>
    )

}
export default Property;

