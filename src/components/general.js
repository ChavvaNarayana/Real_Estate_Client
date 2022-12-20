const General = (props) => {

    return (
        
        <form >

            <div>
                <label >Name</label><br></br>
                <input type="text" placeholder="Owner" />
            </div>

            <div>
                <label >Mobile</label><br></br>
                <input type={"text"} required placeholder="Enter Mobile Number" />
            </div>

            <div>
                <label >Posted By</label><br></br>
                <input type="text" placeholder="Posted By " />
            </div>

            <div>
                <label >Sale Type</label><br></br>
                <select name="Sale Type" placeholder="Please Select " >
                    <option value="" disabled selected>Please Select </option>
                    <option value="rent">Rent</option>
                    <option value="sale">Sale</option>
                </select>
            </div>

            <div>
                <label >Featured Package</label><br></br>
                <select name="Featured Package" placeholder="Please Select ">
                    <option value="" disabled selected>Please Select </option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                </select>
            </div>

            <div>
                <label >PPD Package</label><br></br>
                <select type="text" placeholder="Please Select" >
                    <option value="" disabled selected>Please Select </option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                </select>
            </div>

            <div >
                {/* Add photo can be implemented later */}
            </div>

        </form>

    )
}

export default General;