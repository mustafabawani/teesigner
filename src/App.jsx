import React,{Component} from 'react';
import { BrowserRouter, Routes ,Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import ProductList from './Pages/ProductList';
import Product from "./Pages/Product";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';



const App = () => {
  return(
      <BrowserRouter> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/ProductList" element={<ProductList/>} />
            <Route exact path="/Product" element={<Product/>} />
            <Route exact path="/Register" element={<Register/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/Cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
  )
};

export default App;