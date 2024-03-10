import React,{useState} from 'react'
import ReactPlayer from "react-player"
import "../styles/home.css"
import Video from "./video/pp.mp4"


const Home = () => {
  const imgL = [{ name:"Men's Department"},{ name:"Women's Department"},{ name:"Youth Department"},{ name:"Prayer Team"},{ name:"The Royal Court Choir"},{ name:"Welfare Unit"},{ name:"Evangelism Unit"},{ name:" Ushering Unit"},{ name:"The Sanctuary Keepers"},{ name:"The Technical Unit"}]
  const VideoUrl =  Video
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
        <div  className='WPI2'>Welcome to Royal Grace</div>
        <div className='WPI21'>Redemption Chapel</div>
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
            <div className='take2'>Royal Grace <span className='demPY'>Redemption Chapel</span>/ God's Army General Bible Church</div>
            <div></div>
            <div className='take3'>We Welcome you to Royal Grace Redemption Chapel, where warmth and fellowship embrace you on your spiritual journey.</div>
            <div className='place2'>
               <div className='place3'>
                  <div className='study4'>Place Of Heaven</div>
                  <div className=''>In Royal Grace you will feel divinity, piety, goodness, faith or right beliefs.</div>
               </div>
               <div className='place3'>
                  <div className='study4'>Study Bible</div>
                  <div className=''>Learn the Bible enhance your wisdom, give you boldness about your faith</div>
               </div>
            </div>
            <div className='learnM'>Learn More</div>
           </div>
            <div className='theyAre1'>
              <div className="theyAre2" >
              <img src="/img/pastor.jpeg" alt="" className='heyImage'/>
              </div>
            </div>
       </div>
       </div>

       <div className='bigDIV'>
        <div className='kli'>
        <div className='listenB'>
          Pray! And listen to God! You can do this alone, but find somebody to do it with you
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
   
    
     </div>
   </div>
   ))}
   </div>
   </div>
      

     
    </div>
  )
}

export default Home