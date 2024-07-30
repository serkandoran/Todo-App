import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserReducer from "./features/authenticatedUserSlice";

export const store = configureStore({
   reducer: {
      auth:authenticatedUserReducer
   }
})
export type AppDispatch = typeof store.dispatch;
export default store;