import React from 'react'
import Video from "./video/pp.mp4"
import "../styles/contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
// import { useLocation } from 'react-router-dom';

const Contact = () => {
     const VideoUrl =  Video
 const inputs = [{label:"First Name:",type:"text"},{label:"Last Name:",type:"text"},{label:"Email*",type:"email"},{label:"Phone:",type:"number"}]

//    const location = useLocation()
//   console.log(location.pathname)
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]
  return (
    <div>

        {/* header div */}
        <div>
                <div >
       <video  width="560" height ="315" autoPlay loop muted className='video1' >
        <source src={VideoUrl} type="video/mp4"/>

       </video>
       <div className='coverDiv1 coverDiv17'></div>
       <div className='loMO'>
       <div className='heroText77'>
        <div className='heroText1'>
         <div className='heroText2'  > We have a place for you.</div>
        </div>
        
       </div>
       </div>
       <div className='heroShim1'></div>
       </div>
        </div>

        {/* end section */}

        <div className='coverDC'>
            <div className='connectWithUs'><span  className='connectWithUs1'>Connect</span> with us</div>
            <div></div>
            <div className='contactFormD'>
                <div className='ddV'>
                    <div className='ddV23'>
                    <div className='ifUs'>Contact us so we can connect with you!  The best way to connect with us initially is through email, thank you!</div>
                    <div>
                        <form>
                            {inputs.map((app,id)=>(
                                <div key={id}>
                            <div className='LabelCon'>{app.label}</div>
                            <div>
                                <input type={app.type} className='inputsConnect'/>
                            </div>
                            </div>
                            ))}

                            <div className='youCon'>
                                <div className='youCon1'>
                                    <div className='youCon14'>Tell us more about you:</div>
                                    <div><input type="radio" /><label className='visitLC'>Considering Visiting</label></div>
                                    <div className='cll'><input type="radio" /><label className='visitLC '>Have visited before</label></div>
                                </div>
                                 <div className='youCon1'>
                                   <div className='youCon14'>Preferred form of contact:</div>
                                    <div><input type="checkbox" /><label className='visitLC'>Text</label></div>
                                    <div><input type="checkbox" /><label  className='visitLC' >Email</label></div>
                                    <div className='cll'><input type="checkbox" /><label className='visitLC'>Phone Call</label></div>
                                    
                                </div>
                            </div>
                            <div>
                                <div>Message *</div>
                                <div>
                                    <textarea className='textF'>
                                    </textarea>
                                </div>
                            </div>
                            <div className='SumbitConnect'>Submit</div>
                             
                        </form>
                    </div>
                    </div>
                </div>
                <div className='ddV'>
                    <div>
                        goggle location map
                    </div>
                    <div>
                        <div className='graceDay'>Grace Encounter Days! </div>
                        <div className='wedDis'>Wed: Hosanna Prophetic (HP) Hour- 5PM. </div>
                        <div  className='wedDis'>Fri: Mercy Supernatural Service (MSS)- 10AM. </div>
                        <div  className='wedDis'>Sun: Glory Reign Service (GRS)- 8AM </div>
                        <div  className='wedDis'>3rd Fridays: Ebenezer Night Of Answers(ENOA)- 9PM Till Dawn</div>
                    </div>
                    <div>
                        <div className='graceDay'>Location</div>
                        <div className='wedDis'> <FontAwesomeIcon icon={ faLocationDot}  className='noLike'/>No 7 Chief Anderson Amadi Avenue Adjacent Runuagholu Market PH</div>
                    </div>
                    <div>
                        <div className='graceDay'>
                            Contact Information
                        </div>
                        <div className='wedDis'>Office Phone: 08069308316</div>
                        <div className='wedDis'>Email: RoyalGrace@gmail.com</div>
                        <div className='deed'>Mailing Address:</div>
                        <div className='wedDis'>P.O. Box 1639</div>
                        <div className='wedDis'>Boring, OR 97009</div>
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
  )
}

export default Contact;