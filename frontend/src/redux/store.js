import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

// Create the store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
