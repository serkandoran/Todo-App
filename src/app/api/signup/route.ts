import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/app/firebaseConfig'
import { NextResponse } from "next/server"



export async function POST(req: Request) {
   // try{
   //    const data = await req.json();
   //    const {name, surname, email, password, todos} = data
   //    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
   //    console.log(auth, email, password);
   //    const user = userCredentials.user;
   //    const newUser = await addDoc(collection(db, "users"), {
   //       name: name + " " + surname,
   //       email,
   //       password,
   //       todos
   //    })
   //    return NextResponse.json({ 
   //       message: "register user success",
   //       authId:user.uid,
   //       user:newUser.id
   //    })
   // }
   
   const auth = getAuth();
   try {
      // console.log(auth);
      // console.log(name,surname,email,password,todos);
      const data = await req.json();
      const { name, surname, email, password, todos } = data

      
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      const docRef = await addDoc(collection(db, "users"), {
         name: name + " " + surname,
         email,
         password,
      })
      // return NextResponse.json({
      //    message: "register user success",
      //    authId:user.uid,
      //    userId:docRef.id
      // })
   }catch(e){
      return NextResponse.json({ message: "error occured when registering user", status: 400})
   }
}




