import React from 'react';
import ProfilePic from "../Assets/image6Profile.jpeg";
import {AiFillStar} from "react-icons/ai"
 
const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What are they saying</h1>
        <p className="primary-text">
            Here is a review from one of our various customers who used Campus MarketPlace
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="image-profile" src={ProfilePic} alt="" />
        <p>
            Thanks to this app I don't have a problem looking for the products/services I want to purchase and I don't have to be stressed by many whatsapp messages from businesses popping up on my phone lol
        </p>
        <div className="testimonials-stars-container ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
