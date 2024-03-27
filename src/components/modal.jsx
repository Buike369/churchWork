import React from 'react'
import "../styles/modal.css"


const Modal = ({imageUrl,onClose}) => {
    const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
    slidesToSlide: 1 // optional, default to 1.

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
    slidesToSlide: 1 // optional, default to 1.
  } 
};




  return (
    <div className='modal' onClick={onClose}> 
    <div  className='modal-content'>
      
        <img src={imageUrl} alt="Popup" />

    </div>


    </div>
  )
}

export default Modal