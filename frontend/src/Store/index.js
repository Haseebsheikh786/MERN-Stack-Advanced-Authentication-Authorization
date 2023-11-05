import { configureStore } from "@reduxjs/toolkit";
 import userReducer from "../Pages/User/userSlice";
 
export const store = configureStore({
  reducer: {
     user: userReducer,
   },
});
