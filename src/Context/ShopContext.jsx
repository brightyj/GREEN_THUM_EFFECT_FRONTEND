import React, { useState, useEffect, createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]); // Define all_product state variable
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data))
      .catch((error) => console.error("Error fetching products: ", error));
  
if(localStorage.getItem('auth-token')){
  fetch('http://localhost:4000/getcart',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'auth-token':`${localStorage.getItem('auth-token')}`,
  'Content-Type':'application/json',
  },
  body:"",
}).then((response)=>response.json())
.then((data)=>setCartItems(data));
    }

},[])
 

  const addToCart = (itemId) => {
    if(!localStorage.getItem('auth-token')){
      alert("Please Login");
      return;
    }
    console.log(itemId); 
    const J=JSON.stringify({ "itemid": itemId });
   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
        fetch('http://localhost:4000/addtocart', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: J
        })
        .then((response) => {
            // Log the response for debugging
            console.log("Server response:", response);
            
            // Check if response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            // Parse response as JSON
            return response.json();
        })
        .then((data) => {
            // Log the parsed data
            console.log("Parsed response data:", data);
        })
        .catch((error) => {
            // Handle and log any errors
            console.error("Error adding to cart: ", error);
        });
    }
};

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "itemid": itemId }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error removing from cart: ", error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;