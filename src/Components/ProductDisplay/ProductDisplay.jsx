import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    if (product && product.id) {
      addToCart(product.id);
    } else {
      console.error("Invalid product or product ID");
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <h1>EVERYWHERE GREEN HAPPY NATURE</h1>
        <p className="productdisplay-right-category"><span>Category :</span> {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;

