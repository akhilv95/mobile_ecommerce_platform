import {Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products.js";
import Cart from "./components/Cart.js";
import React from 'react'
import { CartProvider } from './CartContext.js';

function App() {

  return (
    <React.Fragment>
      <CartProvider>
      <Navbar />
   
   <Routes>
    
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
   </Routes>
   </CartProvider>
   </React.Fragment>
   
   
  );
}

export default App;
