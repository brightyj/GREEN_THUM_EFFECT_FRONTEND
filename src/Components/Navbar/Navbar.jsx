import React ,{useContext, useState}from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import Banner from'../Assets/banner1.jpg'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const[menu,setMenu]=useState("shop");
     const {getTotalCartItems}=useContext(ShopContext)
     
  return (
    <div className ='navbar'>
      <div className="nav-logo">
        <img src={logo}alt=""/>
        <p> GREEN THUMB </p>
    </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("indoor")}}><Link style={{textDecoration:'none'}} to='/indoor'>INDOOR</Link>{menu==="indoor"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("outdoor")}}><Link style={{textDecoration:'none'}} to='/outdoor'>OUTDOOR</Link>{menu==="outdoor"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("succelent")}}><Link style={{textDecoration:'none'}} to='/succelent'>SUCCELENTS</Link>{menu==="succelent"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("fertilizer")}}><Link style={{textDecoration:'none'}} to='/fertilize'>FERTILIZERS</Link>{menu==="fertilizer"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/') }}>Logout</button>
            :<Link to='/login'><button>  Login</button></Link>}
            <Link to='/cart'><img src = {Banner}alt=""/></Link>
             <div className="nav-cart-count">{getTotalCartItems()}</div> 
        </div>
    </div>
  )
}

export default Navbar
