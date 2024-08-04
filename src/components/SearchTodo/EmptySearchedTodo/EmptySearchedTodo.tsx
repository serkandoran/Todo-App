import React from 'react'

const EmptySearchedTodo = () => {
  return (
     <table className="table w-100 h-100 d-flex align-items-center">
        <tbody>
           <tr>
            <td>
               <h5>Aranan kriterde todo bulunamadı.</h5>
            </td>
           </tr>
        </tbody>
     </table>
  )
}

export default EmptySearchedTodo