"use client"
import { auth as auth_ } from '@/app/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { updateAuth } from '@/redux/features/authenticatedUserSlice';
import Loading from './Loading/Loading';
import { fetchUserData } from '@/redux/features/userSlice';

const getCurrentUser = (callback: (user: User | null) => void) => {
   return onAuthStateChanged(auth_, callback);
};

const AuthProvider = ({ children }: any) => {
   const [user, setUser] = useState<User | null | undefined>(undefined);
   const dispatch = useDispatch<AppDispatch>();
   const [loading, setLoading] = useState<boolean>(true)
   const logoutClickedFromNavbar = useSelector((state:any) => state.auth.logoutClicked)


   useEffect(() => {
      const unsubscribe = getCurrentUser(setUser);
      return () => {
         unsubscribe();
         setLoading(false)
      } // Temizleme işlemi
   }, []);

   useEffect(()=>{
      if(user === undefined) return

      async function loadUserData(){
         if(user?.email){
            await dispatch(fetchUserData(user?.email));
            dispatch(updateAuth(true));
         }else{
            if(!logoutClickedFromNavbar) dispatch(updateAuth("none"));
         }
      }
      loadUserData();
   },[user])

   if(loading){
      return <>
         <Navbar />
         <Loading />
      </>
   }
   if(!loading){
      return (
         <>
            <Navbar />
            {children}
         </>
      )
   }
   
}

export default AuthProvider