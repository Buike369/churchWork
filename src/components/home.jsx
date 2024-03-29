import React,{useState,useEffect} from 'react'
import ReactPlayer from "react-player"
import AOS from 'aos';
import "../styles/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

import Video from "./video/pp.mp4"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from 'react-router-dom';
import Modal  from './modal'


const Home = () => {
  const imgL = [{ name:"Men's", name1:"Department"},{ name:"Women's",  name1:" Department"},{ name:"Youth", name1:"Department"},{ name:"Prayer", name1:"Team"},{ name:"The Royal", name1:" Court Choir"},{ name:"Welfare",name1:" Unit"},{ name:"Evangelism",name1:" Unit"},{ name:" Ushering ", name1:"Unit"},{ name:"The Sanctuary", name1:" Keepers"},{ name:"The Technical", name1:" Unit"}]
  const functionUnitA  = [{ name:"Men's", name1:"Department"},{ name:"Women's",  name1:" Department"},{ name:"Youth", name1:"Department"},{ name:"Prayer", name1:"Team"},{ name:"The Royal", name1:" Court Choir"}]
  const functionalUnitB = [{ name:"Evangelism",name1:" Unit"},{ name:" Ushering ", name1:"Unit"},{ name:"The Sanctuary", name1:" Keepers"},{ name:"The Technical", name1:" Unit"},{ name:"Welfare",name1:" Unit"}]
  const VideoUrl =  Video
  const location = useLocation()
  // console.log(location.pathname)

  // const [modalImageUrl,setModalImageUrl] = useState(null)

  // const handleImageClick = (imageUrl)=>{
  //   setModalImageUrl(imageUrl);

  // }
  // const handleCloseModal=()=>{
  //   setModalImageUrl(nul)
  // }

  const cardEvent =["king",'king','king','king','king','king','king']

  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

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
 
const ButtonOne =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}>1</div>
  )
}

const ButtonTwo =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}>2</div>
  )
};


const ButtonThree =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}>3</div>
  )
}


const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
 const cardEvent =["king",'king','king','king','king','king','king']

  return (
    <button style={{width:"10px",height:"10px",cursor:'pointer',background:active ? "red" :"transparent",position:"absolute",border:'1px solid blue'}}
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(cardEvent)[index]}
    </button>
  );
};


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> 
      <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
      <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
    </div>
  );
};

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
          <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay ={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div> <div className='heroText2'  > Experience the warmth of fellowship as we journey together in faith and growth  in Christ </div>
  <div className='NewEvents'>New Events <FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div></div>
  
  <div> <div className='heroText2'  > Discover the beauty and power of unity,  joy of walking together in faith</div>
  <div className='NewEvents'>New Events <FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div></div>
  {/* <div> <div className='heroText2'  > Join us as we embark on a transformative journey with christ</div>
  <div className='NewEvents'>New Events <FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div></div> */}
  <div>
     <div className='heroText2'  ><div className='graceDay'>Grace Encounter Days! </div>
                        <div className='wedDis dav'>Wed: Hosanna Prophetic (HP) Hour- 5PM. </div>
                        <div  className='wedDis dav'>Fri: Mercy Supernatural Service (MSS)- 10AM. </div>
                        <div  className='wedDis dav'>Sun: Glory Reign Service (GRS)- 8AM </div>
                        <div  className='wedDis dav'>3rd Fridays: Ebenezer Night Of Answers(ENOA)- 9PM Till Dawn</div></div>
                        <div className='NewEvents'>New Events <FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div>
                        </div>
</Carousel>
         {/* <div className='heroText2'  > Experience the warmth of fellowship as we journey together in faith and growth  in Christ</div> */}
         {/* <div className='NewEvents'>New Events</div> */}
        </div>
        
       </div>
       </div>
       <div className='heroShim'></div>
       </div>

       {/* section1 */}
       <div className='youFirst'>
       <div className='WelcomePage'>
        <div className='WPI'>
        <div  className='WPI2' data-aos="fade-down"  data-aos-duration="3000" data-aos-easing="linear">Royal Grace Redemption Chapel/ GOD'S Army General Church</div>
       
        
       
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
            <div className='take2' data-aos="fade-up"
     data-aos-duration="3000">WELCOME</div>
            <div></div>
            <div className='take3' data-aos="fade-up"
     data-aos-duration="3000">Royal Grace Redemption Chapel/GAG, commissioned by God for a divine purpose, is an Apostolic community passionately dedicated to the Ministry of Reconciliation, healing, and deliverance. Rooted in the Word, Prayer, and Prophecy, we are a zealous and wisdom-packed family fervently engaged in evangelism, soul-winning, humanitarianism, and exploring eternal subjects.  </div>
            <div className='take3' data-aos="fade-up"
     data-aos-duration="3000">At RGRC/GAG, our unwavering belief in the Word of God and the power of prayer has led to profound physical manifestations of God's power, including miraculous healings and even the resurrection of the dead.</div>
            <div  className='take3' data-aos="fade-up"
     data-aos-duration="3000"> Every gathering with us is marked by the extraordinary, where miracles, signs, and wonders are a living reality.</div>
            <div className='take3' data-aos="fade-up"
     data-aos-duration="3000">In our community, the blind see, the lame walk, the barren give birth, and the dead are given a second chance. No matter how dark the night, attending our services ensures that your day will break, and in every hopeless situation, grace and mercy will find you.</div>
            <div className='take3' data-aos="fade-up"
     data-aos-duration="3000">We are a victorious community where failure and defeat are not options; born to win, victory is our prerogative. Join us at GAG, a home many never truly had, where love, compassion, and the passion of Christ create a sweet home in the making.</div>
          
          
           </div>
            <div className='theyAre1'>
              <div className="theyAre2" >
              <img src="/img/app.jpeg" alt="" className='heyImage'  data-aos="fade-right" data-aos-duration="2000"/>
              </div>
            </div>
       </div>
       </div>

       {/* another sectio */}

  <div className='NeEven'>
     <div className='LNPM'> Latest News</div>
     <div className='HECT'>Happenings, Events and Updates in the Ministry</div>
<div className='youReM'>
           <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay ={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  partialVisible={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
   {cardEvent.map((app,id)=>(
     <div className='lllM1' key={id}>
      <div className='lllM'><img src="/img/ccc.jpeg" alt="" className='jpl' /></div>
      <div className='lllM2' >REMEMBER ME, OH LORD – PST. PRINCEDMOON O GODWIN</div>
     </div>
     ))}
</Carousel>
</div>
     {/* {cardEvent.map((app,id)=>(
     <div className='lllM1' key={id}>
      <div className='lllM'><img src="/img/ccc.jpeg" alt="" className='jpl' /></div>
      <div className='lllM2' >REMEMBER ME, OH LORD – PST. PRINCEDMOON O GODWIN</div>
     </div>
     ))} */}
  </div>




       
    {/* another sectio */}
       <div className='bigDIV'>
        <div className='kli'>
        <div className='listenB'>
          "Embrace the opportunity to become a fervent mission partner or volunteer today"
        </div>
        <div className='real14'>As a dedicated partner in the Royal Grace or GAG mission, you have the opportunity to embark on a transformative journey, bringing the healing, prophetic, and deliverance power of God to people and nations worldwide. Whether through sponsorship, partnership, or contributing regularly, be it weekly, monthly, or yearly, as a one-time giver or faithful tither, your commitment fuels this life-changing chariot. Additionally, as a volunteer, you can play a vital role by coordinating, donating, or offering your residence, vacant community space, or available land for kingdom service, whether as a fellowship center, crusade ground, or Church branch</div>
        <div className=' real1 real12'>Donate Online</div>
        </div>
       </div>


       {/* another Section */}

        <div className='NeEven'>
     <div className='LNPM'> Latest News</div>
     <div className='HECT'>Happenings, Events and Updates in the Ministry</div>
<div className='youReM'>
           <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay ={true}
   arrows={false} 
   renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup />}
    // customDot={<CustomDot />}
    // renderDotsOutside
    // customDot={<CustomDot />}
 
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  partialVisible={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
   {cardEvent.map((app,id)=>(
     <div className='lllM1' key={id}>
      <div className='lllM'><img src="/img/ccc.jpeg" alt="" className='jpl' /></div>
      <div className='lllM2' >REMEMBER ME, OH LORD – PST. PRINCEDMOON O GODWIN</div>
     </div>
     ))}

    
</Carousel>
</div>
     {/* {cardEvent.map((app,id)=>(
     <div className='lllM1' key={id}>
      <div className='lllM'><img src="/img/ccc.jpeg" alt="" className='jpl' /></div>
      <div className='lllM2' >REMEMBER ME, OH LORD – PST. PRINCEDMOON O GODWIN</div>
     </div>
     ))} */}
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