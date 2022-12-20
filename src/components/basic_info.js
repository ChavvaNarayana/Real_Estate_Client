const Basic = (props) => {
    return (
        <>
            <form>

                {/* Property Type */}
                <div>
                    <label >Property Type</label><br></br>
                    <select required name="propertyType" placeholder="Select Property Type" value={propertyType}>
                        <option>Select Property Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="land">Land</option>
                        <option value="shop">Shop</option>
                    </select>
                </div>

                {/* Negotable */}
                <div>
                    <label >Negotiable</label><br></br>
                    <select name="negotiable" placeholder="Select Negotiable " value={negotiable}>
                        <option>Select Negotiable</option>
                        <option value="Yes">YES</option>
                        <option value="No">NO</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label >Price</label><br></br>
                    <input type="text" placeholder="Example: 10000 " value={price}/>
                </div>

                {/* Ownership */}
                <div>
                    <label >Ownership</label><br></br>
                    <select name="Ownership" placeholder="Select Ownership " value={ownerShip}>
                        <option >Select Ownership </option>
                        <option value="Owner">Owner</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                </div>

                {/* Property Age */}
                <div>
                    <label >Property Age</label><br></br>
                    <select name="Property Age" placeholder="Select Property Age " value={propertyAge}>
                        <option value="">Select Property Age </option>
                        <option value="lessthan2years">less than 2 Years</option>
                        <option value="lessthan5years">less than 5 Years</option>
                        <option value="lessthan10years">less than 10 Years</option>
                        <option value="morethan10years">More than 10 Years</option>
                    </select>
                </div>

                {/* Property Approved */}
                <div>
                    <label >Property Approved</label><br></br>
                    <select name="Property Approved" placeholder="Property Approved" value={propertyApproved}>
                        <option > Property Approved </option>
                        <option value="Yes">YES</option>
                        <option value="No">NO</option>
                    </select>
                </div>

                {/* Property Description */}
                <div>
                    <label >Property Description</label><br></br>
                    <input type="text" required placeholder="" value={propertyDescription}/>
                </div>

                {/* Bank Loan */}
                <div>
                    <label >Bank Loan</label><br></br>
                    <select type="text" placeholder="Bank Loan" value={bankLoan}>
                        <option >Bank Loan</option>
                        <option value="available">Available</option>
                        <option value="non-available">Non-Available</option>
                    </select>
                </div>

            </form>
        </>
    )
}
export default Basic;