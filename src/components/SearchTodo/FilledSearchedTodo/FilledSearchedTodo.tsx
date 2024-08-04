import { TTodo } from '@/redux/features/userSlice'
import React from 'react'


type props = {
   searchedTodoList: TTodo[]
}

const FilledSearchedTodo = ({ searchedTodoList } : props) => {
  return (
     <table className="table table-striped-columns table-hover w-100">
        <thead>
           <tr className='table-light'>
              <th scope="col">#</th>
              <th scope="col">Konu</th>
              <th scope="col">Açıklama</th>
              <th scope="col">Durum</th>
           </tr>
        </thead>
        <tbody>
           {
              searchedTodoList.map((el: TTodo, idx: number) => {
                 return el.isDone ? <tr key={idx} className='table-success'>
                    <th scope="row">{idx+1}</th>
                    <td className='w-25'>{el.content}</td>
                    <td className='w-100'>{el.desc}</td>
                    <td className='w-25' style={{ cursor: "pointer" }}>
                       <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                    </td>
                 </tr>
                    :
                    <tr key={idx} className='table-danger'>
                       <th scope="row">{idx+1}</th>
                       <td className='w-25'>{el.content}</td>
                       <td className='w-100'>{el.desc}</td>
                       <td className='w-25'>
                          <svg style={{width:"17px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                       </td>
                    </tr>
              })
           }
        </tbody>
     </table>
  )
}

export default FilledSearchedTodo