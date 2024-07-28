"use client"
import React from 'react'
import Navbar from './Navbar/Navbar'


const AuthProvider = ({ children }: any) => {
   return (
      <>
         <Navbar />
         {children}
      </>
   )
}

export default AuthProvider