import { TTodo } from '@/redux/features/userSlice'
import React from 'react'



type props = {
  listItems: TTodo[]
}


const NotDone = ({listItems}: props) => {

  

  return ( <div className='d-flex flex-column w-50 border border-dark p-4 justify-content-center'>
    <table className="table table-danger table-striped-columns table-hover w-100">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Konu</th>
          <th scope="col">Açıklama</th>
          <th scope="col">İşaretle</th>
        </tr>
      </thead>
      <tbody>
        {
          listItems.map((el: TTodo,idx:number) => {
            return <tr key={idx}>
              <th scope="row">{idx+1}</th>
              <td className='w-25'>{el.content}</td>
              <td className='w-100'>{el.desc}</td>
              <td className='w-25'>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">Yapıldı</label>
                </div>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    <button className='btn btn-primary w-50 mx-auto'>kaydet</button>
  </div>
  )
}

export default NotDone