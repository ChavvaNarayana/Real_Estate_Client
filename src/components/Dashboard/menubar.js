import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";

import { BsFillTagFill } from "react-icons/bs";

import { GrFormView, GrUpload, GrDownload } from "react-icons/gr";
import "./menubar.css";
import logo from "../../images/Logo.png";

const Menubar = () => {
  return (
    <>
      <div className="sidebarconatiner">
        <div className="logo-option">
          <img src={logo} alt="Logo" style={{ width: "70px" }} />
        </div>

        <div className="sidesubcontainer">
          <div className="sideoption property">
            <div className="home">
              <RiHome3Line size={20} />
            </div>
            <div className="property font">Property</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <IoIosNotifications  size={ 20 } />
            </div>
            <div className="navvalue font">Assistant</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <GrDownload  size={ 20 } />
            </div>
            <div className="navvalue font">Received Interest</div>
          </div>

          <div className="sideoption ">
            <div className="other-icons">
              <GrUpload size={ 20 } />
            </div>
            <div className="navvalue font">Sent Interest</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <GrFormView size={ 20 } />
            </div>
            <div className="navvalue font">Property View</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <BsFillTagFill size={ 20 } />
            </div>
            <div className="navvalue font">Traffic Plan</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menubar;
