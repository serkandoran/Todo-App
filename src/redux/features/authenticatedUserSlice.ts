import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TAuthUser = any
const initialState : TAuthUser = {
   authUser: undefined
}

const authenticatedUserSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
      updateAuth: (state, action:PayloadAction<any>) =>{
         state.authUser = action.payload
      }
   }
})

export const { updateAuth } = authenticatedUserSlice.actions;
export default authenticatedUserSlice.reducer;

