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
              <th scope="col">İşaretle</th>
              <th scope="col">Sil</th>
           </tr>
        </thead>
        <tbody>
           {
              searchedTodoList.map((el: TTodo, idx: number) => {
                 return el.isDone ? <tr key={idx} className='table-success'>
                    <th scope="row">bir</th>
                    <td className='w-25'>iki</td>
                    <td className='w-100'>üç</td>
                    <td className='w-25' style={{ cursor: "pointer" }}>N</td>
                    <td className='w-25'></td>
                    <td className='w-100' style={{ cursor: "pointer" }}>
                       <svg data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ width: "18px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                    </td>
                 </tr>
                    :
                    <tr key={idx} className='table-danger'>
                       <th scope="row">bir</th>
                       <td className='w-25'>iki</td>
                       <td className='w-100'>üc</td>
                       <td className='w-25'>N</td>
                       <td className='w-25'>
                          <div className="form-check">
                             <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                             />
                             <label className="form-check-label" htmlFor="flexRadioDefault2">Yapıldı</label>
                          </div>
                       </td>
                       <td className='w-100' style={{ cursor: "pointer" }}>
                          <svg data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ width: "18px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                       </td>
                    </tr>
              })
           }
        </tbody>
     </table>
  )
}

export default FilledSearchedTodo