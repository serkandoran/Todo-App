"use client"

import Login from "../Login/Login";
import User from "../User/User";


type props = {
   userData : any
}
export default function HomePage({userData} : props ) {
   return (
      <main>
         {
            userData && userData !== "none" ? <User /> : userData === "none" && userData !== null && <Login />
         }
      </main>
   );
}
