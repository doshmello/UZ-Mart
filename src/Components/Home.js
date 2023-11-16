import React from 'react'
import Navbar from './NavBar';
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from '../Assets/imageHome.jpeg';
import { FiArrowRight } from "react-icons/fi"
// import HeroSlider, {Slide} from 'hero-slider';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Here to connect the buyer and seller
          </h1>
          <p className="primary-text">
            Search for any commodity you might need on campus and get connected with people with the right product you're looking for.
          </p>
          <button className="secondary-button">
            Search Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
