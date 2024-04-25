import React from 'react'
import {useParams} from 'react-router-dom'
import "../styles/eventPage.css"
const Eventpage = () => {
  const {id} = useParams();

  console.log(id)
  return (
    <div>
        <div className='kimLim'>

          <div className='EvrP'>
            <div className='EvrP1'>
              <div className='ImgEvrP'><img src="/img/banner1.jpeg" alt=""  className='kimLim1'/></div>
              <div className=''>
                Goodness and Mercy Covenant High way
              </div>
            </div>

            <div className='EvrP2'>
              <div className='UpComingP'>
                 Upcoming Events
              </div>
              <div className=''>
               <div className='UIPos'><img src="/img/banner1.jpeg" alt="" className='UIPosJi'/></div>
               <div className=''></div>
              </div>

            </div>
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default Eventpage