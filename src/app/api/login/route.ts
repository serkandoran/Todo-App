import { auth } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
   try {
      const data = await req.json();
      const { email, password } = data
      console.log("string bari",email,password);
      await signInWithEmailAndPassword(auth,email,password)
      return NextResponse.json({
         message: "login success"
      })
   } catch (e) {
      console.log("iki 22 ",e);
      return NextResponse.json({
         message: "login failed",
         status: 400
      })
   }
}

// const signInUser = async (email: string, password: string) => {
//    try {
//       const userCredential = await signInWithEmailAndPassword(serk, email, password);
//       // Giriş başarılı
//       console.log('Giriş yapıldı:', userCredential.user);
//    } catch (error) {
//       console.error('Giriş yapılırken hata:', error);
//    }
// };
// signInUser('test@gmail.com', '12345678');

