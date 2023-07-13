import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestIcon,
    PinterestShareButton,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";


const SocialLinksShare = ()=>{

    return(<>
             <div className="d-flex flex-row justify-content-center">
             <FacebookShareButton
                url={"https://www.homegrownhydro.com"}
                quote={"From Seed to Smoke Grown your own legal dope"}
                hastag="#GoGreenWithHydro"
             ><FacebookIcon /></FacebookShareButton>
             <RedditShareButton
             url={"https://www.homegrownhydro.com"}
             quote={"From Seed to Smoke Grown your own legal dope"}
             hastag="#GoGreenWithHydro"
             ><RedditIcon /></RedditShareButton>
             <TwitterShareButton
             url={"https://www.homegrownhydro.com"}
             quote={"From Seed to Smoke Grown your own legal dope"}
             hastag="#GoGreenWithHydro"
             ><TwitterIcon/></TwitterShareButton>
             <PinterestShareButton
             url={"https://www.homegrownhydro.com"}
             quote={"From Seed to Smoke Grown your own legal dope"}
             hastag="#GoGreenWithHydro"
             media="https://www.homegrownhydro.com"
             description="From seed to smoke grown your own legal dope"
             ><PinterestIcon/></PinterestShareButton>
            </div>
         </>)
}

export default SocialLinksShare