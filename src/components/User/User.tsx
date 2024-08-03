import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Done from './Done/Done'
import NotDone from './NotDone/NotDone'
import { fetchUserData, TTodo } from '@/redux/features/userSlice'
import { arrayRemove, collection, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
import { AppDispatch } from '@/redux/store'

const User = () => {
  const userStore = useSelector((state:any)=>state.userStore.data)
  const userTodos = userStore.todos
  const dispatch = useDispatch<AppDispatch>();


  const selectedItem = async(val: number)=>{
    let newAr = JSON.parse(JSON.stringify(userTodos.notDone));
    newAr[val].isDone = true;
    newAr = [...newAr, ...userTodos.done];
    try{
      const db = getFirestore();
      const userRef = collection(db, "users");
      const q = query(userRef, where("email", "==", userStore.email))
      const querySnapShot = await getDocs(q);
      
      if (!querySnapShot.empty) {
        querySnapShot.forEach(async (docSnapShot) => {
          const userDocRef = docSnapShot.ref;
          await updateDoc(userDocRef, {
            todos: newAr
          })
        })
      }
      await dispatch(fetchUserData(userStore.email));
      console.log("update todo success");
    }catch(e){console.log(e," error occured when updating todo");}
  }
  const deleteItem = async(val:TTodo)=>{
    try {
      const db = getFirestore();
      const userRef = collection(db, "users");
      const q = query(userRef, where("email", "==", userStore.email))
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        querySnapShot.forEach(async (docSnapShot) => {
          const userDocRef = docSnapShot.ref;
          await updateDoc(userDocRef,{
            todos: arrayRemove(val)
          })
        })
      }
      await dispatch(fetchUserData(userStore.email));
      console.log("delete todo success");
    } catch (e) { console.log(e, " error occured when deleting todo"); }
  }


  return (
   <div className='d-flex p-4 w-75 mx-auto gap-4'>
      <Done listItems = 
        {userTodos.done}
        deleteItem = {deleteItem}
       />
      <NotDone 
          selectedItem = { selectedItem }
          listItems={userTodos.notDone} 
       />
   </div>
  )
}

export default User