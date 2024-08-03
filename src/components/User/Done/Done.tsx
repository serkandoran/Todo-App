import { TTodo } from '@/redux/features/userSlice'
import React, { useState } from 'react'




type props = {
  listItems: TTodo[],
  deleteItem: (val:TTodo) => void;
}

const Done = ({listItems, deleteItem}: props) => {
  const [deletingTodoId, setDeletingTodoId] = useState<number | null>(null);


  const deleteTodo = ()=>{
    if(deletingTodoId || deletingTodoId === 0) deleteItem(listItems[deletingTodoId])
  }

  return ( <div className='d-flex flex-column w-50 border border-dark p-4 justify-content-center'>
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 gap-4">
          <div className="d-flex justify-content-between">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Silmek istediğinize emin misiniz?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <button onClick={deleteTodo} data-bs-dismiss="modal" className='btn btn-danger w-50 mx-auto'>Sil</button>
        </div>
      </div>
    </div>

    <table className="table table-success table-striped-columns table-hover w-100">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Konu</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Durum</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        {
          listItems.map((el:TTodo, idx:number)=>{
            return <tr key={idx}>
              <th scope="row">{idx+1}</th>
              <td className='w-25'>{el.content}</td>
              <td className='w-100'>{el.desc}</td>
              <td className='w-100 text-center'>
                <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
              </td>
              <td className='w-100' style={{ cursor: "pointer" }}>
                <svg onClick={() => setDeletingTodoId(idx)} data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ width: "18px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
              </td>
            </tr>
          })
        }
        
      </tbody>
    </table>
  </div>
  )
}

export default Done