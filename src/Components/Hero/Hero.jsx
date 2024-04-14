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
  /*
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const new_collection = [
    {
      id: 1,
      name: "slide1",
      image: slide1, 
      new_price: "10.oo",
      old_price: "15.oo"
    },
    {
      id: 2,
      name: "slide2",
      image: slide2, 
      new_price: "12.00",
      old_price: "18.00"
    },
    {
      id: 3,
      name: "slide3",
      image: slide3, 
      new_price: "12.00",
      old_price: "18.00"
    },
    {
      id: 4,
      name: "slide4",
      image: slide4, 
      new_price: "12.00",
      old_price: "18.00"
    },
   
  ];*/

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
       {/*  <div className="slider-container">
                <Slider {...settings}>
                      {new_collection.map((item, i) => (
                    <div key={i}>
                      <img src={item.image} alt={item.name} />
                        <div>{item.name}</div>
                        <div>New Price: {item.new_price}</div>
                        <div>Old Price: {item.old_price}</div>
                    </div>
                    ))}
                  </Slider>
            </div> */
        <img src={slide4} alt=""/>
        }
      </div>
    </div>
  );
};

export default Hero;

