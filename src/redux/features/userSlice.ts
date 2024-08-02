import { db } from "@/app/firebaseConfig";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";

export type TTodo = {
   desc: string,
   isDone: boolean,
   content:string,
   createdAt: Date
}

type TUserData = {
   email: string;
   todos:{
      done: TTodo[];
      notDone: TTodo[];
   };
   name:string;
   password:string;
}

const initialState:{data: TUserData | null} = {
   data:{
      email:"",
      name:"",
      password:"",
      todos:{
         done:[],
         notDone:[]
      }
   }
}

export const fetchUserData = createAsyncThunk("users/fetchUserData", async (email:string,thunkAPI) => {
   try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("email", "==", email));
      
      const snapShot = await getDocs(q);
      const firebaseUserData = snapShot.docs[0].data();
      const todos: TTodo[] = (firebaseUserData.todos || []).map((todo: any) => ({
         ...todo,
         createdAt: todo.createdAt instanceof Timestamp ? todo.createdAt.toDate() : todo.createdAt
      }));
      const doneTodos = todos.filter(todo => todo.isDone);
      const notDoneTodos = todos.filter(todo => !todo.isDone);

      const userData: TUserData = {
         email: firebaseUserData.email || "",
         todos: {
            done: doneTodos,
            notDone: notDoneTodos
         },
         name: firebaseUserData.name || '',
         password: firebaseUserData.password || ''
      };
      return userData;
   } catch (e) {
      return thunkAPI.rejectWithValue("Failed to fetch user data");
   }
})


const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) =>{
      builder.addCase(fetchUserData.fulfilled, (state, action) => {
         state.data = action.payload;
      });
   }
})

export default userSlice.reducer;

