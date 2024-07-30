import "./Error.css"
import React, { Dispatch, SetStateAction } from 'react'


type props = {
   closeModal: Dispatch<SetStateAction<boolean>>;
}

const Error:React.FC<props> = ({closeModal}) => {

   const closeModalHandler = ()=>{
      closeModal(false)
   }

  return (
  <div className="d-flex justify-content-center align-items-center">
      <div className="modal-bg z-1 vh-100 position-absolute top-0 start-0 opacity-25 d-flex w-100"></div>
      <div className="modal-container z-2 w-50 p-4 rounded position-absolute d-flex justify-content-center align-items-center flex-column">
         <h3 className="m-0 p-0">Hata meydana geldi!</h3>
           <button onClick={closeModalHandler} className="btn btn-primary w-50">kapat</button>
      </div>
  </div>
  )
}

export default Error