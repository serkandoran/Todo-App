import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from "@/app/firebaseConfig";
import { signOut } from 'firebase/auth';
import { updateAuth } from '@/redux/features/authenticatedUserSlice';
import { AppDispatch } from '@/redux/store';

const Navbar = () => {
   const authStore = useSelector((state:any) => state.auth.authUser)
   const dispatch = useDispatch<AppDispatch>();
   

   const logoutUser = async()=>{
      try {
         await signOut(auth);
         dispatch(updateAuth(undefined))
         console.log("sign out basarili");
      } catch (e) {
         console.log(e,'sign out esnasında hata meydana geldi');
      }
   }

   return <div>
      <nav className="navbar navbar-expand-lg bg-dark gap-4 d-flex justify-content-between px-4">
         <div className='p-2'>
            <a className="navbar-brand text-light" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
         </div>
         
         {
            authStore && <div onClick={logoutUser} className='d-flex ml-auto'>
               <div className='p-2'>
                  <a className="navbar-brand text-light" href="/">Logout</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
               </div>
            </div>
         }
      </nav>
   </div>
}

export default Navbar