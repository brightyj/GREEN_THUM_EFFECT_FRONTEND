import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrums = (props) => {
  const { product } = props;
  if (!product || !product.category) {
    // Handle the case where product or category is missing
    return null; // Or return a default value, or render an error message
  }
  return (
    <div className='breadcrums'>
      Home <img src={arrow_icon} alt="Arrow" /> SHop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};


export default Breadcrums


