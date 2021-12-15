import React from 'react';
import { BrowserRouter, Routes ,Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import ProductList from './Pages/ProductList';
import ProductDesc from "./Pages/ProductDesc";
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';



const App = () => {
  return(
      <BrowserRouter> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/ProductList" element={<ProductList/>} />
            <Route exact path="/ProductDesc/:id" element={<ProductDesc/>} />
            <Route exact path="/SignUp" element={<SignUp/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/Cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
  )
};

export default App;