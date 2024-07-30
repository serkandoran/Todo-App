import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TAuthUser = any
const initialState : TAuthUser = {
   authUser: null
}

const authenticatedUserSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
      updateAuthhedUser: (state, action: PayloadAction<any>) =>{
         console.log("dispatched here");
         
      }
   }
})

export const { updateAuthhedUser } = authenticatedUserSlice.actions;
export default authenticatedUserSlice.reducer;

