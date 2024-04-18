import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((product) => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main ">
                <img className="cartitems-product-icon" src={product.image} alt="" />
                <p>{product.name}</p>
                <p>Rs {product.new_price.toFixed(2)}</p> {/* Format price as currency */}
                <button className="cartitems-quantity">{quantity}</button>
                <p>Rs {(product.new_price * quantity).toFixed(2)}</p> {/* Total price for this item */}
                <img onClick={() => removeFromCart(product.id)} className="cartitems-remove-icon" src={remove_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount().toFixed(2)}</p> {/* Format subtotal as currency */}
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs {getTotalCartAmount().toFixed(2)}</h3> {/* Format total as currency */}
            </div>
          </div>
          <button onClick={() => console.log("Proceed to checkout page will load soon")} className="proceed-to-checkout-button">
  PROCEED TO CHECKOUT
</button>


        </div>
      </div>
    </div>
  );
};

export default CartItems;
