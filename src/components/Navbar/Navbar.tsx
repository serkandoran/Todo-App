import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
   const auth = useSelector((state:any) => state.auth.authUser)
   
   

   return <div>
      <nav className="navbar navbar-expand-lg bg-dark gap-4 d-flex justify-content-between px-4">
         <div className='p-2'>
            <a className="navbar-brand text-light" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
         </div>
         {
            auth === null ? <div className='d-flex ml-auto'>
               <div className='p-2'>
                  <a className="navbar-brand text-light" href="/login">Login</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
               </div>
               <div className='p-2'>
                  <a className="navbar-brand text-light" href="/signup">Sign Up</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
               </div>
            </div> :
            <div className='p-2'>
               <a className="navbar-brand text-light" href="/signup">Logout</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
            </div>
         }
      </nav>
   </div>
}

export default Navbar