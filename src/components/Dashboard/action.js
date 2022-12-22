import "./action.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

import Logout from "./logout";
const Action =()=>{
    const userId = localStorage.getItem("userId");
    const userName = userId.split("@")[0];



    return(

        <>
        <div className="headercontainer">
        <div className="userid">USER ID:{userId} </div>

            <div className="dropdown">
              <BiUser />
              {userName}
             
             <CgChevronDown />
              <div className="dropdown-content">
                <Logout></Logout>
              </div>
            </div>
        </div>

      <div className="headerbtmline"></div>
    </>
        
    )
}
export default Action;