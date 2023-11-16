import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/image4About.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-secton-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div>
            <p className="primary-subheading">About</p>
            <h4 className="primary-heading">
                What is Campus MarketPlace?
            </h4>
            <p className="primary-text">
                Here to  connect potential customers with the relevant sellers. Where the seller advertises their products and consumers can search and get connected to the product they need.
            </p>
            <p className="primary-text">
                Through various categories to choose from, the seller won't have a problem advertising their products and services.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className="watch-video-button"> <BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
    </div>
  );
};

export default About
