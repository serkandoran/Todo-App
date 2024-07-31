"use client"
import { useSelector } from "react-redux";
import Login from "./login/page";
import styles from "./page.module.css";

export default function Home() {
  const store = useSelector((state:any) => state.auth.authUser)
  console.log(store,"page tsx");


  return (
    <main className={styles.main}>
      {
        store?.uid ? <h2>Todolar artık</h2> : 
                    <Login />
      }
    </main>
  );
}
