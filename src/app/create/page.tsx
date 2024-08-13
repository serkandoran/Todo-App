"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { fetchUserData } from '@/redux/features/userSlice'
import CreateTodo from '@/components/CreateTodo/CreateTodo'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Loading/Loading'


type Inputs = {
   desc: string
   content:string
}

const Create = () => {
   const dispatch = useDispatch<AppDispatch>();
   const authStore = useSelector((state: any) => state.auth.authUser)
   const router = useRouter();

   useEffect(()=>{
      if(authStore === undefined) return
      if (authStore === "none"){
         router.push("/");
      }else{
         try {
            dispatch(fetchUserData(authStore.email));
         } catch (e) {
            console.log(e);
         }
      }
   },[authStore])

   if(authStore === "none" || authStore === undefined) return null

   return (
      <div>
         <Suspense fallback={<Loading />}>
            <CreateTodo />
         </Suspense>
      </div>
   )
}

export default Create