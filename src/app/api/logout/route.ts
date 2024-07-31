import { auth } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { NextResponse } from "next/server";


export async function GET() {
   try{
      await signOut(auth);
      return NextResponse.json({
         message:"logout success"
      })
   }catch(e){
      console.log("route logout",e);
      return NextResponse.json({
         message:"logout success",
         status:400
      })
   }
   
}