"use client"
import { useSelector } from "react-redux";
import styles from "./page.module.css";
import HomePage from "@/components/HomePage/HomePage";

export default function Home() {
  const authStore = useSelector((state:any) => state.auth.authUser);

  return (
    <main className={styles.main}>
      <HomePage 
        userData={authStore}
      />
    </main>
  );
}
