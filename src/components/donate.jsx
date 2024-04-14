import React, {useState} from 'react'
import "../styles/modal.css"
import "../styles/navbar.css"
import "../styles/mobileNavbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons"

const Donate = ({onClose,onClick}) => {
  const [checkPass,setCheckPass] = useState(true)
  const [checkPass1,setCheckPass1] = useState(true)

  const submitform = ()=>{
  setCheckPass(!checkPass)
  }
    const submitform1 = ()=>{
  setCheckPass1(!checkPass1)
  }
  return (
    <div  className='modal' >
  <div className='modal-content'>
    <form >
    <div className='d_done'>





  <div>
    

      <div>
        {checkPass ? 
        <form action="">
          <div className='closeMMM'><FontAwesomeIcon icon={faXmark}   style={{fontSize:"20px"}} onClick={onClick} className='closeMpp'/></div>
          <div className='howMuchdeposit'> * How much would you like to give? </div>
          <input type="text" placeholder='$1.00' className='inPP'/>
           <div className='howMuchdeposit uplo'>* What should the money used for?</div>
           <div><input type="checkbox"  className='checkB'/><label className='albelM'>Tithes and Offering</label></div>
            <div><input type="checkbox" className='checkB'/><label className='albelM'>Projects Development</label></div>
             <div><input type="checkbox"  className='checkB'/><label className='albelM'>Mission work</label></div>
          <div className='modalButton' onClick={submitform}>Submit</div>
        </form>
        : <div>
            <form action="">
          <div className='closeMMM'><FontAwesomeIcon icon={faXmark}   style={{fontSize:"20px"}} onClick={onClick} className='closeMpp'/></div>
          {checkPass1  ? 
          <div className=''>
          <div className='howMuchdeposit'> * How do you want to donate? </div>
        <div className='transT' onClick={submitform1}>Bank Transfer</div>
        <div className='transT'>Credit Card</div>
        </div>
        : <div>
            <p className='pimpm'><span className='lijkl'>Bank Name :</span> Fidelity Bank</p> 
            <p className='pimpm'><span className='lijkl'>Account Name :</span> </p>
            <p className='pimpm'><span className='lijkl'>Account Number :</span> 6052171496 </p>
          </div>}
        </form>
          </div>}
      </div>

      {/* another se */}
    
      </div>

      {/* <p> Papa's Acc Details: 6052171496 </p>
      <p>Fidelity Bank</p> */}
      </div>
    </form>
  </div>
    </div>
  )
}

export default Donate