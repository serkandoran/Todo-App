"use client"
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, auth as serk } from '@/app/firebaseConfig';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'

type Inputs = {
   email: string,
   password: string,
}

const Login = () => {

   const authStore = useSelector((state:any)=>state.auth.authUser)
   const router = useRouter();

   useEffect(()=>{
      if (authStore !== null) router.push("/")
   },[])

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = async (data) => {



      console.log(data);
      const signInUser = async (email: string, password: string) => {
         try {
            const userCredential = await signInWithEmailAndPassword(serk, email, password);
            // Giriş başarılı
            console.log('Giriş yapıldı:', userCredential.user);
         } catch (error) {
            console.error('Giriş yapılırken hata:', error);
         }
      };
      signInUser('test@gmail.com', '12345678');
   }


   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto bg-light py-3 px-4 border rounded mt-5'>
            <h2 className='text-center pb-4'>Giriş yap</h2>
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
            <div className='d-flex align-items-center gap-2'>
               <button type="submit" className={"btn btn-primary w-75 h-50"}>Giriş Yap</button>
               <div className='w-25'>Henüz kaydolmadıysan <a href="/signup">kaydol</a></div>
            </div>
         </form>
      </div>
   )
}

export default Login