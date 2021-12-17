import { formLabelClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { id:0 , UserloggedIn: false, VendorloggedIn:false};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: {
      ...{id:localStorage.getItem('item'),UserloggedIn:localStorage.getItem('UserloggedIn'),VendorloggedIn:localStorage.getItem('item')}
  } },
  reducers: {
    login: (state, action) => {
      state.value = {
          ...action.payload
      };
    },

    logout: (state) => {
      state.value = {
          ...initialStateValue
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;