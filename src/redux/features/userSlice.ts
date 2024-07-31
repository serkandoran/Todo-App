import { db } from "@/app/firebaseConfig";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";

type TTodo = {
   desc: string,
   isDone: boolean,
   content:string
}

type TUserData = {
   email: string,
   todos:TTodo[],
   name:string,
   password:string
}

const initialState:{data: TUserData | null} = {
   data:{
      email:"",
      name:"",
      password:"",
      todos: []
   }
}

export const fetchUserData = createAsyncThunk("users/fetchUserData", async (email:string,thunkAPI) => {
   try{
      const userRef = collection(db, "users");
      const q = query(userRef, where("email", "==", email));
      const snapShot = await getDocs(q);
      const firebaseUserData = snapShot.docs[0].data();
      const userData: TUserData = {
         email: firebaseUserData.email || "",
         todos: firebaseUserData.todos || [],
         name: firebaseUserData.name || '',
         password: firebaseUserData.password || ''
      }
      return userData
   }catch(e){
      return thunkAPI.rejectWithValue("Failed to fetch user data");
   }
})


const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) =>{
      builder.addCase(fetchUserData.fulfilled, (state,action)=>{
         state.data = action.payload
      })
   }
})

export default userSlice.reducer;

