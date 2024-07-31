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
            authStore && <div className='d-flex gap-4 my-3'>
               <div className='p-2' style={{ cursor: "pointer" }}>
                  <p className="navbar-brand text-success m-0 p-0">TAMAMLANMIŞ</p>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
               </div>
               <div className="input-group">
                  <input type="text" className="form-control" placeholder="Todo Ara" aria-label="searchtodo" aria-describedby="button-addon2" />
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Ara</button>
               </div>
               <div className='p-2 cursor-pointer' style={{ cursor: "pointer" }}>
                  <p className="navbar-brand text-danger m-0 p-0">TAMAMLANMAMIŞ</p>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
               </div>
            </div>
         }
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