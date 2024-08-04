import { TTodo } from '@/redux/features/userSlice'
import React from 'react'
import EmptySearchedTodo from './EmptySearchedTodo/EmptySearchedTodo'
import FilledSearchedTodo from './FilledSearchedTodo/FilledSearchedTodo'


type props = {
   searchedTodo: string,
   allTodos: TTodo[]
}

const SearchTodo = ({searchedTodo, allTodos}: props) => {
   let searchedTodoList = allTodos.filter((el:TTodo) => el.content === searchedTodo )


  return (
    <div className='w-100 text-center border rounded p-2 justify-content-center'>
      {
         searchedTodoList.length ? 
            <FilledSearchedTodo 
                 searchedTodoList={searchedTodoList}
            /> 
            :
            <EmptySearchedTodo />
      }
   </div>
  )
}

export default SearchTodo