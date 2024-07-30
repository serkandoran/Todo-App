"use client"
import { auth as auth_ } from '@/app/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { updateAuth } from '@/redux/features/authenticatedUserSlice';

const getCurrentUser = (callback: (user: User | null) => void) => {
   return onAuthStateChanged(auth_, callback);
};

const AuthProvider = ({ children }: any) => {
   
   const [user, setUser] = useState<User | null | undefined>(undefined);
   const router = useRouter();
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      const unsubscribe = getCurrentUser(setUser);
      return () => unsubscribe(); // Temizleme işlemi
   }, []);

   useEffect(()=>{
      if(user === undefined) return
      if(user === null) router.push("/login")
      dispatch(updateAuth(
         {
            uid:user?.uid,
            email: user?.email
         }
      ))
   },[user])


   return (
      <>
         <Navbar />
         {children}
      </>
   )
}

export default AuthProvider