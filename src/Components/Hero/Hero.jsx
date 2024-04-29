import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import slide1 from '../Assets/slide1.jpg.jpg';
import slide2 from '../Assets/slide2.jpg.jpg';
import slide3 from '../Assets/slide3.png.jpg';
import slide4 from '../Assets/slide4.png.jpg';

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='hero'>
      <div className="hero-left">
        <p> NEW</p>
        <p> STOCK</p>
        <div className="hero-latest-btn">
          <div>Latest Greens</div>
          <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className="hero-right">
        <Slider {...settings}>
          <div>
            <img src={slide1} alt="Slide 1"/>
          </div>
          <div>
            <img src={slide2} alt="Slide 2"/>
          </div>
          <div>
            <img src={slide3} alt="Slide 3"/>
          </div>
          <div>
            <img src={slide4} alt="Slide 4"/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
