import React from "react";
import Menubar from "./menubar";

const Dashboard = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="sidenav">
          <Menubar></Menubar>
        </div>
      </div>
    </>
  );
}
export default Dashboard;