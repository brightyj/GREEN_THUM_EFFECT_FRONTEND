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
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('https://green-thumb-effect-backend.onrender.com/allproducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => setAllProducts(data))
      .catch((error) => console.error("Error fetching products: ", error));

    if (localStorage.getItem('auth-token')) {
      fetch('https://green-thumb-effect-backend.onrender.com/getcart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch cart');
          }
          return response.json();
        })
        .then((data) => setCartItems(data))
        .catch((error) => console.error("Error fetching cart: ", error));
    }
  }, []);

  const addToCart = (itemId) => {
    if (!localStorage.getItem('auth-token')) {
      alert("Please Login");
      return;
    }
    console.log(itemId); 
    const J = JSON.stringify({ "itemid": itemId });
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('https://green-thumb-effect-backend.onrender.com/addtocart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: J
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Item added to cart:", data);
      })
      .catch((error) => {
        console.error("Error adding item to cart: ", error);
      });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')) {
      fetch('https://green-thumb-effect-backend.onrender.com/removefromcart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemid": itemId }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error removing from cart: ", error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item));
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
    allProducts,
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
