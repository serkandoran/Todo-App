import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserReducer from "./features/authenticatedUserSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
   reducer: {
      auth:authenticatedUserReducer,
      userStore: userSlice
   }
})
export type AppDispatch = typeof store.dispatch;
export default store;