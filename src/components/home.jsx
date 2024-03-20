import React,{useState,useEffect} from 'react'
import ReactPlayer from "react-player"
import AOS from 'aos';
import "../styles/home.css"
import Video from "./video/pp.mp4"
import { useLocation } from 'react-router-dom';


const Home = () => {
  const imgL = [{ name:"Men's", name1:"Department"},{ name:"Women's",  name1:" Department"},{ name:"Youth", name1:"Department"},{ name:"Prayer", name1:"Team"},{ name:"The Royal", name1:" Court Choir"},{ name:"Welfare",name1:" Unit"},{ name:"Evangelism",name1:" Unit"},{ name:" Ushering ", name1:"Unit"},{ name:"The Sanctuary", name1:" Keepers"},{ name:"The Technical", name1:" Unit"}]
  const functionUnitA  = [{ name:"Men's", name1:"Department"},{ name:"Women's",  name1:" Department"},{ name:"Youth", name1:"Department"},{ name:"Prayer", name1:"Team"},{ name:"The Royal", name1:" Court Choir"}]
  const functionalUnitB = [{ name:"Evangelism",name1:" Unit"},{ name:" Ushering ", name1:"Unit"},{ name:"The Sanctuary", name1:" Keepers"},{ name:"The Technical", name1:" Unit"},{ name:"Welfare",name1:" Unit"}]
  const VideoUrl =  Video
  const location = useLocation()
  console.log(location.pathname)

  useEffect(()=>{
    AOS.init({once: true});
    // AOS.init();
  },[])
  return (
    <div>
      
       <div >
       <video  width="560" height ="315" autoPlay loop muted className='video' >
        <source src={VideoUrl} type="video/mp4"/>

       </video>
       <div className='coverDiv'></div>
       <div className='loMO'>
       <div className='heroText'>
        <div className='heroText1'>
         <div className='heroText2'  > Experience the warmth of fellowship as we journey together in faith and growth  in Christ</div>
        </div>
        
       </div>
       </div>
       <div className='heroShim'></div>
       </div>

       {/* section1 */}
       <div className='youFirst'>
       <div className='WelcomePage'>
        <div className='WPI'>
        <div  className='WPI2' data-aos="fade-down"  data-aos-duration="3000" data-aos-easing="linear">Enter the realm of royal elegance at  Royal Grace  </div>
       
        
        <div className='WPI21' data-aos="fade-up"  data-aos-duration="3000" data-aos-easing="linear">Redemption Chapel</div>
        <div  className='RM2'>
    <div className='RM3'></div>
    <div className='RM3'></div>
  </div>
        <div className='WPI22'>Join us in our  activities </div>
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
            <div className='take2'>WELCOME</div>
            <div></div>
            <div className='take3'>Royal Grace Redemption Chapel/GAG, commissioned by God for a divine purpose, is an Apostolic community passionately dedicated to the Ministry of Reconciliation, healing, and deliverance. Rooted in the Word, Prayer, and Prophecy, we are a zealous and wisdom-packed family fervently engaged in evangelism, soul-winning, humanitarianism, and exploring eternal subjects.  </div>
            <div className='take3'>At RGRC/GAG, our unwavering belief in the Word of God and the power of prayer has led to profound physical manifestations of God's power, including miraculous healings and even the resurrection of the dead.</div>
            <div  className='take3'> Every gathering with us is marked by the extraordinary, where miracles, signs, and wonders are a living reality.</div>
            <div className='take3'>In our community, the blind see, the lame walk, the barren give birth, and the dead are given a second chance. No matter how dark the night, attending our services ensures that your day will break, and in every hopeless situation, grace and mercy will find you.</div>
            <div className='take3'>We are a victorious community where failure and defeat are not options; born to win, victory is our prerogative. Join us at GAG, a home many never truly had, where love, compassion, and the passion of Christ create a sweet home in the making.</div>
          
          
           </div>
            <div className='theyAre1'>
              <div className="theyAre2" >
              <img src="/img/pastor.jpeg" alt="" className='heyImage'  data-aos="fade-right" data-aos-duration="2000"/>
              </div>
            </div>
       </div>
       </div>

       <div className='bigDIV'>
        <div className='kli'>
        <div className='listenB'>
          "Pray! And listen to God! You can do this alone, but find somebody to do it with you"
        </div>
        <div className='real1'>Real Story Cross Journey from Anna Hampton</div>
        <div className='real1 real12'>Donate Online</div>
        </div>
       </div>
  <div>

  </div>
  <div className='opOp'>
  <div className='OurMini'>Our Functional Units</div>
  <div  className='RM2'>
    <div className='RM3'></div>
    <div className='RM3'></div>
  </div>
  <div className='textPad98'>Departments you can join to serve God within this commission</div>
  <div className='EmeWE'>
  {imgL.map((app,id)=>(
    
   <div className='MiniR' key={id}>
     {/* <div className='OurMini1'><img src="/img/ccc.jpeg" alt="" className='OurMini2'/></div> */}
     <div  className="guh">
     <div className='OurMini3'>{app.name}</div>
      <div className='OurMini3'>{app.name1}</div>
   
    
     </div>
   
   </div>
   ))}
   </div>
   <div className='funUnit'>
       <div className='funUnitA'>
        {functionUnitA.map((app,id)=>(
         <div className='MiniR addMiniR' key={id} data-aos="fade-up"  data-aos-duration="3000">
     {/* <div className='OurMini1'><img src="/img/ccc.jpeg" alt="" className='OurMini2'/></div> */}
     <div  className="guh">
     <div className='OurMini3 OurMini3B'>{app.name}</div>
      <div className='OurMini3'>{app.name1}</div>
   
    
     </div>
   
         </div>
         ))}
       </div>
       <div   className='funUnitB'>
        {/* <div className='addMiniRB'></div> */}
          {functionalUnitB.map((app,id)=>(
         <div className='MiniR   addMiniRB' key={id} data-aos="fade-up"  data-aos-duration="3000" data-aos-easing="linear">
     {/* <div className='OurMini1'><img src="/img/ccc.jpeg" alt="" className='OurMini2'/></div> */}
     <div  className="guh">
     <div className='OurMini3  OurMini3B'>{app.name}</div>
      <div className='OurMini3'>{app.name1}</div>
   
    
     </div>
   
         </div>
         ))}
       </div>
   </div>
   </div>
      

     
    </div>
  )
}

export default Home