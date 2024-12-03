import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, token: "" },
  reducers: {
    login: (state, action) => {
      console.log(state, action, 'loginsda')  
      const { token } = action.payload;
      state.isLoggedIn = true;
      state.token = token;
      localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
