import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from './features/user'
import cartReducer from './features/cartRedux'

const store= configureStore({
  reducer:{
    user: userReducer, 
    cart:cartReducer,
  },
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);