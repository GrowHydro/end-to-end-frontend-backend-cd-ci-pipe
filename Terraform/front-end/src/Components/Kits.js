import { Routes, Route, Outlet } from 'react-router-dom';
import Mock from '../pictures/mock.jpg'
import DogMock from '../pictures/dogmock.jpg'
import Kit from './KitCard'

const hydrokits = [
    {id: 1, img: Mock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 2 plants", title: "The Professional Stoner"},
    {id: 2, img: DogMock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 4 plants", title: "The Dogg"}

]

const Kits =()=>{
    const makeKitCards = () =>{
        return hydrokits.map((k, i) =><span>
            <Kit id={k.id} img={k.img} alt={k.alt} title={k.title} des={k.des} key={i} />
            </span>)
    }

    return(<div className="d-flex flex-column justify-content-center mx-auto">
            <h1 className="mx-auto text-success">Grow Kits</h1>
            <p className="mx-auto fw-bolder fs-3 text-danger">Become your own Dispensary</p>
            <p className="mx-auto fw-bolder fs-4 text-warning">Grow all the marijuana you want</p>
            {makeKitCards()}
            <Outlet />
           </div>)
}

export default Kits;