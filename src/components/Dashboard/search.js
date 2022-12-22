
import { BsSearch, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./search.css";
// import axios from "axios";
import Userdetails from "./userdetails";



const Serach=()=>{
    const [searchItem, setSearchItem] = useState("");

    const handleTextSearch = (e) => {
      setSearchItem(e.target.value);
    };


    return (
      <>
        <div className="seracharea">
          <div className="searchbtn">
            <input
              type="text"
              placeholder="Search ppd id"
              className="isearch"
              name="id"
              id="id"
              onChange={handleTextSearch}
            />

            <button type="submit" className="isearchbtn">
              <BsSearch className="btncolor" />
            </button>
          </div>
          <Link to="/add-property">
            <button type="sumbit" className="addbtn">
              <BsPlus /> Add Property
            </button>
          </Link>
        </div>

         <div className="propertylstpart">
          <Userdetails searchItem={searchItem} />
        </div>
      </> 
    );
}
export default Serach;
