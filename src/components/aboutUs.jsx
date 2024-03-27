import React, {useEffect} from 'react'
import "../styles/aboutUs.css"
import Video from "./video/pp.mp4"
import AOS from 'aos';

const AboutUs = () => {

     const VideoUrl =  Video

      useEffect(()=>{
    AOS.init({once: true});
    // AOS.init();
  },[])

  return (
    <div>
        {/* hero Section */}
       <div>
                <div >
       <video  width="560" height ="315" autoPlay loop muted className='video1' >
        <source src={VideoUrl} type="video/mp4"/>

       </video>
       <div className='coverDiv1 coverDiv17'></div>
       <div className='loMO'>
       <div className='heroText77'>
        <div className='heroText1'>
         <div className='heroText2'  > We love and care for people</div>
       
        </div>
        
       </div>
       </div>
       <div className='heroShim1'></div>
       </div>
        </div>
        {/* end Section */}

   {/* section1 */}
         <div className='youFirst'>
       <div className='WelcomePage'>
        <div className='WPI'>
        <div  className='WPI2' data-aos="fade-down"  data-aos-duration="3000" data-aos-easing="linear">Vision and Mission  </div>
        <div  className='RM2'>
    <div className='RM3'></div>
    <div className='RM3'></div>
  </div>
        
        <div className='WelcomePageP'>
          <div className='WelcomePageP1 WelcomePageP2'>

          </div>
          <div className='WelcomePageP1 WelcomePageP3'>
            <img src="" alt="" className='' />
          </div>
        </div>
        </div>
       </div>
       <div className='theyAre'>
           <div className='theyAre1'>
              <div className="theyAre2" >
              <img src="/img/past.jpeg" alt="" className='heyImage'  data-aos="fade-right" data-aos-duration="2000"/>
              </div>
            </div>
           <div className='theyAre1'>
            <div className='take2'>Our Mission</div>
            <div></div>
            <div className='take3'>Empowered by the Spirit, our mission is to raise generations of men and women who walk in the inheritance of their world. Through the radiant character of the Spirit, we exposit the divine presence of God to the nations, connecting humanity with the Almighty's passion, purpose, and power.  </div>
            <div className='take3'>We cultivate a community where Christ's love is shared, serving His purpose to win, restore, and reconcile souls back to God.Christ permeates every aspect of our lives, liberating and enabling us to fulfill our God-given potential.</div>
            <div  className='take3'> Our church is a beacon of God's love, where lives are transformed into His likeness, trust and loyalty are cherished, and His presence is palpable.</div>
          
          
          
           </div>
       
       </div>
       </div>
       {/* end section1 */}

       {/* section2 */}
       <div className='CnkkL'>
       <div className='AboutUsCnk'  >
          <div className='Cbb1'>Join Us In Our Services today</div>
          <div>
             
         <div  className='Cbb3'>Wed: 5PM Hosanna Prophetic.</div>
         <div  className='Cbb3'>Fri: 10AM Mercy Service </div>
          <div  className='Cbb3'>Sun: 8AM  Glory Reign Service </div>
         <div  className='Cbb4 Cbb3'>New Here</div>
          </div>
       </div>
       </div>

    </div>
  )
}

export default AboutUs