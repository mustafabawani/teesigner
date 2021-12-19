import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        product:[],
        // product_size:[],
        // product_quantity:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.product.push(action.payload);
            // ,action.payload.size,action.payload.quantity);
            // state.product_size.push(action.payload.size);
            // state.product_quantity.push(action.payload.quantity);
            // state.produc
            // state.quantity.push(action)
            state.total += action.payload.product.unit_price * action.payload.quantity;
        },
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;