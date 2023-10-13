import {
    FacebookIcon,
    FacebookShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterShareButton
  } from "react-share";
  //workaround for twitter icon update
import TwitterIcon from '../pictures/twitter-logo-black.png'
import share from '../pictures/share.png'
import facebookFollow from '../pictures/facebook-100.png'

const SocialLinksShare = ()=>{

    return(<> 
             <span className="d-flex flex-column w-100">
               <a href="https://www.facebook.com/profile.php?id=61551877254688" target="_blank" rel="noreferrer" className="rounded font-italic text-warning bg-black fs-3 mx-auto">
                  follow us
               <img src={facebookFollow} alt="facebook"/>
               </a>
             <div className="d-flex flex-row justify-content-center">
               <img className="bg-white" src={share} alt="share" />
             <FacebookShareButton
                url={"https://thchomegrown.com"}
                quote={"From Seed to Smoke Grown your own legal dope"}
                hastag="#GoGreenWithHydro"
             ><FacebookIcon /></FacebookShareButton>
             <RedditShareButton
             url={"https://thchomegrown.com"}
             quote={"From Seed to Smoke Grown your own legal dope"}
             hastag="#GoGreenWithHydro"
             ><RedditIcon /></RedditShareButton>
             <TwitterShareButton
             key="twitterLogo"
             className="bg-white"
             url={"https://thchomegrown.com"}
             quote={"From Seed to Smoke Grown your own legal dope"}
             hastag="#GoGreenWithHydro"
             ><img src={TwitterIcon} alt="twittter-icon" height={60} /></TwitterShareButton>
             <PinterestShareButton
             url={"https://thchomegrown.com"}
             quote={"From Seed to Smoke Grown your own legal dope"}
             hastag="#GoGreenWithHydro"
             media="https://thchomegrown.com"
             description="From seed to smoke grown your own legal dope"
             ><PinterestIcon/></PinterestShareButton>
            </div>
            </span>
         </>)
}

export default SocialLinksShare