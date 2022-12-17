import React from 'react';
import './Footer.css'
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="box-link">
            <a href="">
              PRIVACY POLICY
            </a>
            <a href="">
              TERM OF SERVICE
            </a>
            <a href="">
              ABOUT SNAPUP.</a>
          </div>
          <h6>
            <RiCopyrightLine />
            2022 SnapUp. All Rights Reserved.</h6>

        </div>
      </div>
    </>
  );
}

export default Footer;
