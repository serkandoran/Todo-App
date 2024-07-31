"use client"
import Error from '@/components/Error/Error'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { fetchUserData } from '@/redux/features/userSlice'
import CreateTodo from '@/components/CreateTodo/CreateTodo'



type Inputs = {
   desc: string
   content:string
}

const Create = () => {
   const router = useRouter();
   const dispatch = useDispatch<AppDispatch>();
   const authStore = useSelector((state: any) => state.auth.authUser)


   useEffect(()=>{
      if (authStore) {
         try {
            dispatch(fetchUserData(authStore.email));
         } catch (e) {
            console.log(e);
         }
      }
   },[authStore])


   return (
      <div>
         <CreateTodo />
      </div>
   )
}

export default Create