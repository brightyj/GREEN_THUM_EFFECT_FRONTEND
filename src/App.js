
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';


import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import indoor_banner from './Components/Assets/banner_in.png';
import outdoor_banner from './Components/Assets/banner_outdoor.png';
import succelent_banner from './Components/Assets/banner_succelent.png';
import fertilizer_banner from './Components/Assets/banner_fertilizer.png';


function App() {
  return (
    <div >
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ='/' element={<Shop/>}/>
      { <Route path='/indoor' element={<ShopCategory banner={indoor_banner}category="indoor"/>}/> }
      <Route path='/outdoor' element={<ShopCategory banner={outdoor_banner}category="outdoor"/>}/>
      <Route path='/succelent' element={<ShopCategory banner={succelent_banner} category="succulent"/>}/>
      <Route path='/fertilize' element={<ShopCategory banner={fertilizer_banner} category="fertilizer"/>}/>
      <Route path='/productId' element={<Product/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
