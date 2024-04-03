import React from 'react'
import "../styles/modal.css"

const Donate = ({onClose,onClick}) => {
  return (
    <div  className='modal' onClick={onClick}>
  <div className='modal-content'>
    <form onClick={onClose}>
    <div className='d_done'>
      <p> Papa's Acc Details: 6052171496 </p>
      <p>Fidelity Bank</p>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Donate