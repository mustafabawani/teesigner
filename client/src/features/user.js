import { formLabelClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "",  email: "" , location: "" , loggedIn: false};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: {
      ...initialStateValue
  } },
  reducers: {
    login: (state, action) => {
      state.value = {
          ...action.payload
      };
    },

    logout: (state) => {
        console.log('test', state.value);
      state.value = {
          ...initialStateValue
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;