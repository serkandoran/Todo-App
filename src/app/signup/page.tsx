"use client"
import Error from '@/components/Error/Error'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { db } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/navigation'



type Inputs = {
   name: string
   surname: string,
   email: string,
   password: string,
}

const Signup = () => {
   const [apiError, setApiError] = useState<boolean>(false)
   const router = useRouter();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = async (data) => {

      const {name, surname, email, password} = data
      const auth = getAuth();

      try{
         const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
         const user = userCredentials.user;

         const docRef = await addDoc(collection(db, "users"), {
            name: name + " " + surname,
            email,
            password,
            todos: []
         })
         router.push("/")
      }catch(e){
         console.log(e,"err occured signing up");
      }
   }

   return (
      <div>

         { apiError && <Error closeModal = {setApiError} /> }

         <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto bg-light py-3 px-4 border rounded mt-5'>
            <h2 className='text-center pb-4'>Kayıt Ol</h2>
            <div className='d-flex gap-2'>
               <div className="mb-3 w-100">
                  <label htmlFor='name' className="form-label d-flex align-items-center gap-2">
                     <p className='m-0'>Ad</p>
                  </label>
                  <input
                     type="text" className="form-control shadow-none" id="inputname" aria-describedby="name"
                     {...register("name", {
                        required: "Name is required"
                     }
                     )}
                  />
                  {errors.name && <span className='text-danger fst-italic'>{errors.name.message}</span>}
               </div>
               <div className="mb-3 w-100">
                  <label htmlFor="surname" className="form-label d-flex align-items-center gap-2">
                     <p className="m-0">Soyad</p>
                  </label>
                  <input
                     type="text" className="form-control shadow-none" id="inputsurname" aria-describedby="surname"
                     {...register("surname", {
                        required: "Surname is required"
                     }
                     )}
                  />
                  {errors.surname && <span className='text-danger fst-italic'>{errors.surname.message}</span>}
               </div>
            </div>
            <div className="mb-3">
               <label htmlFor="inputEmail" className="form-label d-flex align-items-center gap-2">
                  <p className='m-0'>Email address</p>
               </label>
               <input
                  type="email" className="form-control shadow-none" id="inputEmail" aria-describedby="emailHelp"
                  {...register("email", {
                     required: "Email is not valid",
                     pattern: {
                        value: /^[a-zA-Z0-9çğıöşüÇĞİÖŞÜ]+@(hotmail|gmail)\.com$/,
                        message: "Email is not valid"
                     }
                  })}
               />
               {errors.email && <span className='text-danger'>{errors.email.message}</span>}
            </div>
            <div className="mb-3">
               <label htmlFor="inputPassword" className="form-label d-flex align-items-center gap-2">
                  <p className='m-0'>Password</p>
               </label>
               <input
                  type="password" className="form-control shadow-none" id="text" aria-describedby="textHelp"
                  {...register("password", {
                     required: "Password is not valid",
                     minLength: {
                        value: 8,
                        message: "Password must be atleast 8 characters"
                     }
                  })}
               />
               {errors.password && <span className='text-danger'>{errors.password.message}</span>}
            </div>
            <button type="submit" className={"btn btn-primary w-100 h-50"}>Kaydol</button>
         </form>
      </div>
   )
}

export default Signup