import React from "react";
import { RiHome3Line } from "react-icons/ri";

import { FiDownloadCloud, FiUploadCloud, FiEye } from "react-icons/fi"
import { BsFillTagFill } from "react-icons/bs";
import { HiOutlineBell } from 'react-icons/hi'

import "./Menubar.css";
import logo from "../../images/Logo.png";

const Menubar = () => {
  return (
    <>
      <div className="sidebarconatiner">
        <div className="logo-option index-logo">
          <img src={logo} alt="Logo" style={{ width: "100px",height:"80px" }} />
        </div>

        <div className="sidesubcontainer">
          <div className="sideoption property">
            <div className="home">
              <RiHome3Line size={20} />
            </div>
            <div className="property ">Property</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <HiOutlineBell className="down" size={ 20 } />
            </div>
            <div className="navvalue ">Assistant</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <FiDownloadCloud  className="down"  size={ 20 } />
            </div>
            <div className="navvalue ">Received Interest</div>
          </div>

          <div className="sideoption ">
            <div className="other-icons">
              <FiUploadCloud className="down" size={ 20 } />
            </div>
            <div className="navvalue ">Sent Interest</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <FiEye className="down" size={ 20 } />
            </div>
            <div className="navvalue ">Property View</div>
          </div>

          <div className="sideoption">
            <div className="other-icons">
              <BsFillTagFill className="down" size={ 20 } />
            </div>
            <div className="navvalue">Traffic Plan</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menubar;
