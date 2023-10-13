import { Outlet } from "react-router-dom"
import '../scss/contact.scss'
import Weed from '../pictures/gorgeous.webp'
import Email from '../pictures/share-email.png'
import Phone from '../pictures/white-mobile.png'
import ContentReveal from "./Reveal/RevealContact"


const Contact = () =>{

    return(<>
            <div className="d-flex flex-column mx-auto">
            <div className="contact">
                <h1 className="text-center text-white"><img src={Phone} alt="contact" height="60px" />text/call 602-758-7832</h1>
                <h1 className="text-center text-white"><img src={Email} alt="mailto" />grow.hydros@gmail.com</h1>
                <img src={Weed} alt='weed' className="mx-auto rounded-circle" id="flower" />
                <ContentReveal />
            </div>
            <Outlet />
            </div>
           </>)
}

export default Contact