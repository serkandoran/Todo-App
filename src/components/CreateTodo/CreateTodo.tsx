"use client"
import Error from '@/components/Error/Error'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { addDoc, arrayUnion, collection, doc, getDocs, getFirestore, query, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { fetchUserData } from '@/redux/features/userSlice'

type Inputs = {
   desc: string
   content: string,
   isDone:boolean,
   createdAt: any
}


const CreateTodo = () => {
   const dispatch = useDispatch<AppDispatch>();
   const userStore = useSelector((state: any) => state.userStore.data)
   const authStore = useSelector((state: any) => state.auth.authUser)
   
   console.log(authStore);
   

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = async (data) => {

      try {
         const now = Timestamp.fromDate(new Date());
         data.isDone = false;
         data.createdAt = now;
         
         const newTodo = data;

         const db = getFirestore();
         const userRef = collection(db,"users");
         const q = query(userRef, where("email", "==",authStore.email))
         const querySnapShot = await getDocs(q);
         if(!querySnapShot.empty){
            querySnapShot.forEach(async(docSnapShot)=>{
               const userDocRef = docSnapShot.ref;
               await updateDoc(userDocRef, {
                  todos: arrayUnion(newTodo)
               })
            })
         }
         
         
         console.log("adding document success");
      } catch (e) {
         console.log(e);
      }
   }




  return (
     <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto bg-light py-3 px-4 border rounded mt-5'>
        <h2 className='text-center pb-4'>Todo Ekle</h2>
        <div className="mb-3">
           <label htmlFor="inputText" className="form-label d-flex align-items-center gap-2">
              <p className='m-0'>Konu</p>
           </label>
           <input
              type="content" className="form-control shadow-none" id="text" aria-describedby="textHelp"
              {...register("content", {
                 required: "Content is not valid",
                 minLength: {
                    value: 1,
                    message: "Content must be atleast 1 characters"
                 }
              })}
           />
           {errors.content && <span className='text-danger'>{errors.content.message}</span>}
        </div>
        <div className="mb-3">
           <label htmlFor="inputText" className="form-label d-flex align-items-center gap-2">
              <p className='m-0'>Todo İçeriği</p>
           </label>
           <input
              type="desc" className="form-control shadow-none" id="text" aria-describedby="textHelp"
              {...register("desc", {
                 required: "Description is not valid",
                 minLength: {
                    value: 1,
                    message: "Description must be atleast 1 characters"
                 }
              })}
           />
           {errors.desc && <span className='text-danger'>{errors.desc.message}</span>}
        </div>
        <button type="submit" className={"btn btn-primary w-100 h-50"}>Ekle</button>
     </form>
  )
}

export default CreateTodo