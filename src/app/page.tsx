"use client"
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import Login from "@/components/Login/Login";
import { useEffect } from "react";
import { AppDispatch } from "@/redux/store";
import { fetchUserData } from "@/redux/features/userSlice";
import User from "@/components/User/User";

export default function Home() {
  const authStore = useSelector((state:any) => state.auth.authUser)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    async function fetchData(){
      await dispatch(fetchUserData(authStore.email));
    }
    if(authStore){
      fetchData();
    }
  }, [authStore])

  return (
    <main className={styles.main}>
      {
        authStore?.uid ? <User /> : 
                    <Login />
      }
    </main>
  );
}
