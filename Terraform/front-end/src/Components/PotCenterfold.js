import ImageGallery from 'react-image-gallery';
import GrowRoom from '../pictures/baller-grow-room.webp'
import GrowRoomSmall from '../pictures/baller-grow-room-small.jpg'
import GrowingCanabisLight from '../pictures/Growing-Cannabis-light.jpg'
import GrowingCanabisLightSm from '../pictures/Growing-Cannabis-light-smaller.jpg'
import Flower from '../pictures/flower.jpg'
import FlowerSm from '../pictures/flower-small.jpg'
import GeorgePot from '../pictures/George-pot.png'
import George from '../pictures/George-small.png'
import Rainbow from '../pictures/rainbow.jpg'
import RainbowSm from '../pictures/rainbow-sm.jpg'
import Lights from '../pictures/lights.jpg'
import LightsSm from '../pictures/lights-sm.jpg'
import '../scss/imageGallery.scss'

const images = [{original: GrowRoom, thumbnail: GrowRoomSmall},
                {original: GrowingCanabisLight, thumbnail: GrowingCanabisLightSm},
                {original: Flower, thumbnail: FlowerSm},
                {original: GeorgePot, thumbnail: George},
                {original: Rainbow, thumbnail: RainbowSm},
                {original: Lights, thumbnail: LightsSm}    
            ];

const PotCenterfold =()=>{

    return(<>
            
                <ImageGallery autoPlay={true} items={images} />
            
           </>)
}

export default PotCenterfold;