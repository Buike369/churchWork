import React from 'react'
import "../styles/modal.css"


const Modal = ({imageUrl,onClose}) => {

   



  return (
    <div className='modal' onClick={onClose}> 
    <div  className='modal-content'>
      
        <img src={imageUrl} alt="Popup" />

    </div>


    </div>
  )
}

export default Modal