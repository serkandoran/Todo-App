import React from 'react'

const Loading = () => {
   return (<div>
      <div className="modal d-flex gap-2 align-items-center justify-content-center bg-dark opacity-25 "></div>
      <div className='z-3 d-flex align-items-center gap-3 position-absolute top-50 start-50 translate-middle'>
         <div className="spinner-grow" role="status"></div>
         <h1>Loading...</h1>
      </div>
   </div>
   )
}

export default Loading