import React from "react";
import Menubar from "./menubar";
import Serach from "./search";
import Action from "./action";
import "./dashboard.css";

const Dashboard=()=>{
  return (
    <>
      <div className="maincontainer">
        <div className="sidenav">
          <Menubar></Menubar>
        </div>
        <div className="subpart">
          <div className="headerpart">
            <Action />
          </div>
          <div className="searchpart">
            <Serach />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;