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
import SunKit from '../pictures/kit_sunlight.png'
import SunKitSm from '../pictures/kit_sunlight_thum.png'
import GlowKit from '../pictures/kitglow.png'
import GlowKitSm from '../pictures/kitglowsm.png'
import Snoop from '../pictures/snoop.png'
import SnoopThumb from '../pictures/snoopThumb.png'
import threePlantKit from '../pictures/3plantkit.png'
import threePlantKitThumb from '../pictures/3plantkitThumb.png'
import '../scss/imageGallery.scss'

const images = [{original: GrowRoom, thumbnail: GrowRoomSmall},
                {original: GrowingCanabisLight, thumbnail: GrowingCanabisLightSm},
                {original: Flower, thumbnail: FlowerSm},
                {original: GeorgePot, thumbnail: George},
                {original: Rainbow, thumbnail: RainbowSm},
                {original: Lights, thumbnail: LightsSm},
                {original: Snoop, thumbnail: SnoopThumb},
                {original: SunKit, thumbnail: SunKitSm},
                {original: GlowKit, thumbnail: GlowKitSm},
                {original: threePlantKit, thumbnail: threePlantKitThumb}
            ];

const PotCenterfold =()=>{

    return(<>
                <ImageGallery autoPlay={true} items={images} />
           </>)
}

export default PotCenterfold;