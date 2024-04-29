import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import slide4 from '../Assets/slide4.png.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <p> NEW</p>
        <p> STOCK</p>
        <div className="hero-latest-btn">
          <div>Latest Greens</div>
          <img src={arrow_icon} alt="Arrow Icon"/>
        </div>
      </div>
      <div className="hero-right">
        <img src={slide4} alt="Slide 4"/>
      </div>
    </div>
  );
};

export default Hero;
