import React from 'react';
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className="nav-logo-container">
            <h1>Campus MarketPlace</h1>
        </div>
        <div className='footer-icons'>
            <BsTwitter/>
            <SiLinkedin/>
            <BsYoutube/>
            <FaFacebook/>
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
            <span>Work</span>
        </div>
        <div className='footer-section-columns'>
            <span>+263-776-829869</span>
            <span>hello@food.com</span>
            <span>press@food.xom</span>
            <span>contact@food.com</span>
        </div>
        <div className='footer-section-columns'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
