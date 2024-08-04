import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Done from './Done/Done'
import NotDone from './NotDone/NotDone'
import { fetchUserData, TTodo } from '@/redux/features/userSlice'
import { arrayRemove, collection, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
import { AppDispatch } from '@/redux/store'
import SearchTodo from '../SearchTodo/SearchTodo'

const User = () => {
  const userStore = useSelector((state:any)=>state.userStore.data)
  const userTodos = userStore.todos
  const allTodos = [...userTodos.done, ...userTodos.notDone]
  const dispatch = useDispatch<AppDispatch>();
  const [searchedTodo, setSearchedTodo] = useState<string>('')

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
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchedTodo(e.target.value);
  }

  return (
   <div className='d-flex p-4 w-75 mx-auto gap-4 flex-column'>

      {
        <div className='d-flex gap-4 mt-3 align-items-center w-75 mx-auto'>
          <div className='py-2 d-flex align-items-center' style={{ cursor: "pointer" }}>
            <h4 className='text-success'>TAMAMLANMIŞ</h4>
          </div>
          <div className="input-group">
            <input onChange={handleSearchInput} type="text" className="form-control" placeholder="Todo Ara" aria-label="searchtodo" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary border" type="button" id="button-addon2">Ara</button>
            <button className="btn btn-outline-secondary border" type="button" id="button-addon3">
              <a href="/create" className='text-decoration-none'>Todo Ekle</a>
            </button>
          </div>
          <div className='p-2 cursor-pointer d-flex align-items-center' style={{ cursor: "pointer" }}>
            <h4 className='text-danger'>TAMAMLANMAMIŞ</h4>
          </div>
        </div>
      }
      <hr/>
      <div className='d-flex gap-4'>
        <Done listItems = 
          {userTodos.done}
          deleteItem = {deleteItem}
        />
        {
          searchedTodo.length > 0 && <SearchTodo 
            searchedTodo = {searchedTodo}
            allTodos = {allTodos}
          />
        }
        <NotDone 
            selectedItem = { selectedItem }
            listItems={userTodos.notDone} 
        />
      </div>
   </div>
  )
}

export default User