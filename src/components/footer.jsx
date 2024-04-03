import React, {useState,useEffect} from 'react'
import "../styles/footer.css"


import axios from "axios"
import validator from 'validator';
import Modal  from './modal'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import { useLocation } from 'react-router-dom';
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const [hideMe,setHideMe] = useState("")
     const [inputs,setInputs] = useState({
    email:""
  })
  const [modalImageUrl,setModalImageUrl] = useState(null)

      const [error,setError]=useState("")
     const [messages,setMessages]=useState("")

     const location = useLocation()
  const path = location.pathname;

   const changeHandle4 =(e)=>{

    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  
  }
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/apostleprincedmoon.onyenkpa?mibextid=JRoKGi"},{icon:faTelegram,link:"https://t.me/drmoon_p"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]


 
  const handleImageClick = (imageUrl)=>{
    setModalImageUrl(imageUrl);

  }
  const handleCloseModal=()=>{
    setModalImageUrl(null)
  }
//    const postInfo1 =(e)=>{
// e.preventDefault()
//     if( inputs.email.length === 0 ){
//       setError("field must not be empty")
//        setTimeout(()=>{
//            setError("")
//         },3000)
//     }else
//      if(validator.isEmail(inputs.email) === false){
// setError("invalid Email")
//  setTimeout(()=>{
//            setError("")
//         },3000)
//     }else{

//       axios.post("https://maratproject.onrender.com/api/post/form1",inputs).then((response)=>{
//         // axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{
//         setMessages("Sent Successfully")
//          document.body.classList.add("sucMac");
//         setTimeout(()=>{
//            setMessages("")
//            setInputs({
//             email:""
//            })
//             document.body.classList.remove("sucMac");
          
//         },5000)
//       }).catch((err)=>{
//       //  console.log(err)
//        setError("Internal Server error")
//         document.body.classList.add("sucMac");

//          setTimeout(()=>{
//            setError("")
          
//             document.body.classList.remove("sucMac");
          
//         },5000)
//       })

//     } 
//   }

useEffect(()=>{
    if(path === "/contact"){
       setHideMe("hideMe") 
    }else{
             setHideMe("") 
    }
},[])



  return (
    <div className={hideMe}>
        <div className='footerHouse'></div>
        <div className="footerBackgroundColor">
           
            {/* <div className='padG'>
            <div  className='subEmail'>
                <p className='misOut'>Don't miss out on Fantastic News</p>
                <p className='misOut1'>Subscribe to our newsletter and be the first to receive news.</p>
                <form className='FormPP'>
                    <div>
                        <input type="email" placeholder='Enter your Email' className='yourEmail' name="email" value={inputs.email} onChange={changeHandle4}/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}} onClick={postInfo1}/>
                    </div>
                </form>
                 <img src="/img/news.svg" alt=""  className="messageImg"/>
            </div>
         
            </div> */}
            <div >
             <div className='footerHouse2'></div>
        <div>
            <div className='footerW'>
                 <div className='nF fifi'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead LimP">Links</div></li>

                        <li className='pin pin7'><a href="/about" className='then'>About Us</a></li>
                        <li className='pin  pin6'><a href="/ebook" className='then'>Upcoming Event</a></li>
                        <li className='pin  pin7'><a href="/contact" className='then'>Contact  Us</a></li>
                        <li className='pin1  pin6'><a href="/about" className='then'>About Us</a></li>
                    </ul>
                </div>
                  <div className='footerFo'>
                    <div className="weg4">
                        <div className="ato2">
                   <div className='Weg'>  <div className='pRoG relativeD'>
                <div className='royalGrace'>ROYAL GRACE</div>
                <div className='RdCha'>Redemption Chapel</div>
                 {/* <div><img src="" alt="" /></div> */}
              </div></div>
                   <p className='Weg2'>Royal Grace Redemption Chapel/GAG is an Apostolic body called to carry out the Ministry Of Reconciliation, healing and deliverance to the glory of God.</p>
                   <p className='Weg2 Weg2A'>@ no 7 Chief Anderson Amadi Avenue Adjacent  Runuagholu Market  PH</p>
                   <p className='misOut1'>Subscribe to our newsletter</p>
                   <div>
                    <form className='FormPP'>
                    <div>
                        <input type="email" placeholder='Enter your Email' className='yourEmail' name="email" value={inputs.email} onChange={changeHandle4}/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}} />
                    </div>
                </form></div>
                </div>
                </div>
                </div>
               
                <div className='nF jiki'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Links</div></li>

                        <li className='pin pin7'><a href="/about" className='then'>About Us</a></li>
                        <li className='pin  pin6'><a href="/" className='then'>Upcoming Event</a></li>
                        <li className='pin  pin7'><a href="/contact" className='then'>Contact  Us</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'>Programs</a></li>
                    </ul>
                </div>
                {/* <div className='nF jiki'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Latest News</div></li>
                        <li className='pin pin6'><a href="#" className='then'>Our Team</a></li>
                        <li className='pin pin7'><a href="/about" className='then'>About</a></li>
                        <li className='pin  pin6'><a href="/contact" className='then'>Contact Us</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>Careers</a></li>
                        <li className='pin1  pin6'><a href="#" className='then'>Press</a></li>
                    </ul>
                </div> */}
                <div className='footerFo1'>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Activity Photo</div></li>
                        <li className='pin pin6'>
                            <div className='guideDivs'>
                                <div className='footerImgS'><img src="/img/ccc.jpeg" alt="" className='ImgSrc4' onClick={()=>handleImageClick('/img/ccc.jpeg')}/></div>
                                <div  className='footerImgS'><img src="/img/ccc.jpeg" alt="" className='ImgSrc4' onClick={()=>handleImageClick('/img/ccc.jpeg')}/></div>
                                <div className='footerImgS'><img src="/img/ccc.jpeg" alt="" className='ImgSrc4' onClick={()=>handleImageClick('/img/ccc.jpeg')}/></div>
                                <div className='footerImgS'><img src="/img/ccc.jpeg" alt="" className='ImgSrc4' onClick={()=>handleImageClick('/img/ccc.jpeg')}/></div>
                            </div>
                            </li>
                      
                      
                    </ul>
                </div>
               
            </div>
        </div>
        </div>
       
        
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2024 RoyalGrace Redemption Chapel . All Rights Reserved
            </div>
            <div className="hotter">
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"15px"}} /></a></div></li>
                </ul>
                ))}
                </div>
            </div>
        </div>
        </div>
        </div>

             {messages && 
<div className="successM">
     <div className="sucMac1">
      <div className="sucMac2">
          {messages}
      </div>
     </div>
     </div>
      }


                {error && 
<div className="successM">
     <div className="sucMac1">
      <div className="sucMac2">
          {error}
      </div>
     </div>
     </div>
      }


      {modalImageUrl && <Modal imageUrl={modalImageUrl} onClose={handleCloseModal} />}
    </div>
  )
}

export default Footer