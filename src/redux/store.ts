import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserSlice from "./features/authenticatedUserSlice";

export const store = configureStore({
   reducer: {
      authenticatedUserSlice
   }
})
export type AppDispatch = typeof store.dispatch;
export default store;