
import React,{useState} from 'react'
import "../styles/navbar.css"
import "../styles/mobileNavbar.css"
import {useNavigate}  from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faSearch} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"

const Header = () => {

  const [isChecked,setIsChecked] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const tr = window.location.pathname;

   const [feedBack,setFeedBack]=useState("")
   const [feedBack1,setFeedBack1]=useState("")
   const navbarItem = [{link:"/courses",text:"Explore",name:"navbar1_link explore"},{link:"/ebook",text:"eBook",name:"navbar1_link"},{link:"/blog",text:"Blog",name:"navbar1_link"},{link:"/project",text:"projects",name:"navbar1_link"},{ link:"/",text:"pricing",name:"navbar1_link"}]

    window.onscroll =()=>{
        scrollF()
      }
    const socialLink = [{icon:faTwitter,link:"https://x.com/general_pr73766?t=jrwNqQtIljpvZfG0IBbIQA&s=08"},{icon:faFacebookF,link:"https://www.facebook.com/apostleprincedmoon.onyenkpa?mibextid=JRoKGi"},{icon:faTelegram,link:"https://t.me/drmoon_p"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]

      const scrollF =()=>{
          if(document.body.scrollTop > 100  || document.documentElement.scrollTop > 100 ){
            setFeedBack('subCap')
              setFeedBack1('cap')
          }else {
              setFeedBack(' ')
              setFeedBack1(' ') 
          }
      }

      const handleCheckboxChange = (event)=>{
   setIsChecked(event.target.checked)
   if(isChecked){
    document.body.classList.remove('cac')
   }else{
       document.body.classList.add('cac')
   }
      }

      const navigate = useNavigate()
  const pushMe = () =>{
    navigate("/contact")
  } 
    
  return (

    <div >
    <div className={` "header" ${feedBack}`}>
      <div className="Navbar relativeD">

            <div className='NavLogoNa'><a href="/" className="Brand">
             <div className='lokolo'> <img src="/img/kolo.jpeg" alt="" className='ImgLogo' />
              <div className='pRoG relativeD'>
                <div className='royalGrace'>ROYAL GRACE</div>
                <div className='RdCha'>Redemption Chapel</div>
                 {/* <div><img src="" alt="" /></div> */}
              </div>
              </div>
              </a></div>
        
            {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password")  ? "":
            <div >
        <div className="nacBar">
           
          <ul className="NavbarUl  relativeD" >
              <li ><a href="" className="navbar1_link linkAB">Services</a></li>
               <li ><a href="#" className="navbar1_link linkAB">Music</a></li>
               <li ><a href="#" className="navbar1_link linkAB">Event</a></li>
                <li><a href="/about" className="navbar1_link linkAB" style={{color:feedBack1}}>About</a></li>
        
          </ul>
          
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password") ? "" :
        <div style={{width:"15%"}}>
          <div className="hamburgerMenu">
    <input id="menuToggle" type="checkbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
    <label className="menuBtn" for="menuToggle">
      <span></span>
    </label>
     <div className="menuBox">
    <ul className="menuBox24">
      
      <li className='lineBor'><a className="menuItem" href="/contact">Contact Us</a></li>
      <li className='lineBor'><a className="menuItem" href="/about">About Us</a></li>
      <li className='lineBor'><a className="menuItem" href="#">Music</a></li>
      <li className='lineBor'><a className="menuItem" href="/">Upcoming Event</a></li>
                  
      <li > 
        <div className='hotVink'>
         <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"15px"}} /></a></div></li>
                </ul>
                ))}
                </div>
                </div>
                </li>
    </ul>
    </div>
  </div>
           <ul className="NavbarUl">
          
           <li> <a href="/contact"><div className='logInB relativeD' >
          
            Contact Us
            </div>
            </a></li>
         
           </ul>
        </div>
        }
       
      </div>


     
         

    </div>

    </div>
  )
}

export default Header