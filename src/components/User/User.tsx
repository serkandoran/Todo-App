import React from 'react'
import { useSelector } from 'react-redux'
import Done from './Done/Done'
import NotDone from './NotDone/NotDone'

const User = () => {
  const userStore = useSelector((state:any)=>state.userStore.data)
  const userTodos = userStore.todos
  console.log(userTodos);
  


  return (
   <div className='d-flex p-4 w-75 mx-auto gap-4'>
      <Done listItems = {userTodos.done} />
      <NotDone listItems={userTodos.notDone} />
   </div>
  )
}

export default User