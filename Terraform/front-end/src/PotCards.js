import { Outlet, useNavigate } from "react-router-dom";
import HydroKit from './pictures/HydroponicFactory.webp';
import VerticalFarm from './pictures/vertical-farm.jpg';
import './scss/hydroponics.scss';
import 'bootstrap/dist/css/bootstrap.css';
import ContentReveal from "./Components/Reveal/RevealContact";
import RevealWhy from "./Components/Reveal/WhyReveal";
import SocialLinksShare from './Components/SocialLinksShare';
import webmasterscompany from './pictures/webmasterscompany.jpg'

const cardInfo = [
    {img: VerticalFarm, class: 'farm', alt: "Grow indoors", des: 'A vertical Fram using hydroponics', info: 'Hydropoincs grow faster and give more flower', title: 'Hydro'},
    {img: HydroKit, class: 'kit', alt: 'hydroponics setup', des: 'A plug and grow hydroponics setup', info: 'our models take the guess work and sweat out of growing pot', title: 'Kits' },
]
const PotCards = ({smartPhone, cannabisStatement}) =>{
    const navigate = useNavigate();
    
    const followLink=(link)=>{
        ;
        navigate("/"+link);
    }

    const makeComponents = () =>{
        return cardInfo.map((card,i)=><span onClick={()=>followLink(card.title.toLocaleLowerCase())} className={card.class + " " + 'card'} key={card.alt}><h1>{card.title}</h1></span>)
    }

    return(<>
            <div className='d-flex flex-column'>
                <h1 contenteditable className={`mx-auto text-warnin font-italic text-warning bg-black ${smartPhone ? "d-none" : "fs-2"}`}>Grow and save like a boss</h1>
                {/* <h1 contenteditable className={`mx-auto text-warnin font-italic text-warning bg-black ${smartPhone ? "fs-4" : "fs-2"}`}>{smartPhone ? cannabisStatement.substring(21, cannabisStatement.length) : cannabisStatement }</h1> */}
               
                <div className="mx-auto">
                {makeComponents()}
                <ContentReveal />
                <RevealWhy />
                <SocialLinksShare />
                <br/>
                {/* <img src={webmasterscompany} alt="a webmasters solutions company" height={"240px"} width={"350px"} /> */}
                
                <Outlet />
                </div>
                <p className={`mx-auto text-warning shadow p-3 mb-3 bg-black rounded ${smartPhone ? "fs-6" : "fs-2"}`}>
                {smartPhone ? cannabisStatement.substring(21, cannabisStatement.length) : cannabisStatement }
        </p>
        <p className={`mx-auto text-warning shadow p-3 mb-3 bg-black rounded ${smartPhone ? "fs-6" : "fs-2"}`}>
        Partner with us to become true Horticulturists
        </p>
        <p className={`mx-auto text-warning shadow p-3 mb-3 bg-black rounded ${smartPhone ? "fs-6" : "fs-2"}`}>
        We Love our Customers
        </p>
        <p className={`mx-auto text-warning shadow p-3 mb-3 bg-black rounded ${smartPhone ? "fs-6" : "fs-2"}`}>
       Amazing Value you will Love
       <br/>
        {/* </p>
        <p className={`mx-auto text-warning shadow p-3 mb-3 bg-black rounded ${smartPhone ? "fs-6" : "fs-2"}`}> */}
       How much Cannabis you grow
        </p>
        <p className={`mx-auto text-warning shadow p-3 mb-3 bg-black rounded ${smartPhone ? "fs-6" : "fs-2"}`}>
       Free Consultation text us
       <br/>
       if you wanna grow copius cannabis
        </p>
            </div>
           </>)
}

export default PotCards