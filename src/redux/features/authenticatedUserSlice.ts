import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
   authUser: undefined,
   logoutClicked: false
}

const authenticatedUserSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
      updateAuth: (state, action:PayloadAction<any>) =>{
         state.authUser = action.payload
      },
      updateLogoutClickedFromNav: (state) => {
         state.logoutClicked = true;
      }
   }
})

export const { updateAuth, updateLogoutClickedFromNav } = authenticatedUserSlice.actions;
export default authenticatedUserSlice.reducer;

