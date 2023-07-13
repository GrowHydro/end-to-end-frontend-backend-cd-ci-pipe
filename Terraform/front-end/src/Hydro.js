import { Outlet } from "react-router-dom"
import './scss/hydroponics.scss'
import PotCenterfold from "./Components/PotCenterfold"

const Hydro = () =>{

    return(<>
            <div className="hydroponics mx-auto">
                <h1 className="text-success">Grow Kits for Marijuana</h1>
                <p className="text-success">From seed to smoke grow your own legal dope</p>
                <p className="text-danger">We take the sweat, blood, and tears out of hydroponics.</p>
                <p className="text-info">You'll get up and growing faster and growing pot instantly</p>
                <p className="text-info">Our plug and grow system has been designed to plug in...and grow...that's it</p>
                <PotCenterfold />
            </div>
            <Outlet />
           </>)
}

export default Hydro