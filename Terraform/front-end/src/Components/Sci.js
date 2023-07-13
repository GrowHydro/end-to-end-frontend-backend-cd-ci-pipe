import Weed from '../pictures/Yellow-Leaf-Small.png'
import Scix from '../pictures/scix-small.png'

const Sci=()=>{

    return(<>
            <div className="d-flex flex-column mx-auto hydroponics scix">
            <h1 className='text-center'>Welcome to the Future of Growing Weed</h1>
                <p className="weed"><img className="rounded-circle" src={Scix} alt="weed" /></p>
                <p>If you're looking to grow high-quality, potent marijuana, then hydroponics is the way to go.</p>
                <p>With hydroponic systems, you can easily control every aspect of your plants' growth, including the amount of light, water, and nutrients they receive.</p>
                <p>This means you can achieve faster growth, higher yields, and more potent buds.</p>
                <p>Additionally, hydroponic systems allow you to grow marijuana indoors, which means you can have a steady supply of top-shelf weed all year round, regardless of the weather outside.</p>
                <p>So whether you're a seasoned cultivator or just starting out, growing legal marijuana with hydroponics is the best option for producing top-quality buds.</p>
                <p><img className="rounded-circle" src={Scix} alt="scix" /></p>   
                <p>Hydroponics, the art of growing plants without soil, is a game-changer in the world of agriculture. </p>
                <p>With hydroponics, growers have the ability to control every aspect of a plant's growth, from the amount of nutrients it receives to the pH of the water it's grown in.</p>
                <p>This level of precision results in faster growth, higher yields, and more nutritious produce, making hydroponics the best way to grow. Additionally, hydroponic systems use significantly less water than traditional soil-based farming methods, making them more sustainable and eco-friendly. </p>
                <p>So if you're looking for a way to revolutionize your gardening game, hydroponics is the way to go<img className="rounded-circle" src={Weed} alt="weed" /></p>
            </div>
           </>)
}

export default Sci;