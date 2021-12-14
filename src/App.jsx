import React,{Component} from 'react';
import { BrowserRouter, Routes ,Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import ProductList from './Pages/ProductList';
import Product from "./Pages/Product";
import Register from './Pages/Register';
import LoginTemp from './Pages/LoginTemp';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import CreateProduct from './Pages/CreateProduct';


const App = () => {
  return(
      <BrowserRouter> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/ProductList" element={<ProductList/>} />
            <Route exact path="/Product" element={<Product/>} />
            <Route exact path="/Register" element={<Register/>} />
            <Route exact path="/LoginTemp" element={<LoginTemp/>} />
            <Route exact path="/Cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
      
  )
};

export default App;