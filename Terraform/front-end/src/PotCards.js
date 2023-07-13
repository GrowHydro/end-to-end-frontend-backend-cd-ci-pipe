import { useNavigate } from "react-router-dom";
import HydroKit from './pictures/HydroponicFactory.webp';
import VerticalFarm from './pictures/vertical-farm.jpg';
import './scss/hydroponics.scss';
import 'bootstrap/dist/css/bootstrap.css';
import ContentReveal from "./Components/Reveal/RevealContact";
import RevealWhy from "./Components/Reveal/WhyReveal";
import SocialLinksShare from './Components/SocialLinksShare';

const cardInfo = [
    {img: VerticalFarm, class: 'farm', alt: "Grow indoors", des: 'A vertical Fram using hydroponics', info: 'Hydropoincs grow faster and give more flower', title: 'Hydro'},
    {img: HydroKit, class: 'kit', alt: 'hydroponics setup', des: 'a plug and grow hydroponics setup', info: 'our models take the guess work and sweat out of growing pot', title: 'Kits' },
]
const PotCards = () =>{
    const navigate = useNavigate();

    const followLink=(link)=>{
        debugger;
        navigate("/"+link);
    }

    const makeComponents = () =>{
        return cardInfo.map((card,i)=><span onClick={()=>followLink(card.title.toLocaleLowerCase())} className={card.class + " " + 'card'} key={card.alt}><h1>{card.title}</h1></span>)
    }

    return(<>
            <div className='d-flex flex-column'>
                <h1 contenteditable className="mx-auto text-warnin font-italic glow bg-black">Grow and save like a boss</h1>
                <div className="mx-auto">
                {makeComponents()}
                <ContentReveal />
                <RevealWhy />
                <SocialLinksShare />
                </div>
                
            </div>
           </>)
}

export default PotCards