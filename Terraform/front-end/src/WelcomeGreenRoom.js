import { useEffect, useState } from 'react'
import './scss/greenroom.scss'
import Navigate from './Navigate.js'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Hydro from './Hydro'
import PotCards from './PotCards'
import Contact from './Components/Contact'
import Sci from './Components/Sci'
import Kits from './Components/Kits'
import Kit from './Components/KitCard'
import Buy from './Components/Buy'
import Mock from './pictures/mock.jpg'
import DogMock from './pictures/dogmock.jpg'
import Customers from './Components/Customers'

const kits = [
   
    {id: 1, key: 1, img: Mock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 2 plants", title: "The Professional Stoner"},
    {id: 2, key: 2, img: DogMock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 4 plants", title: "The Dogg"}

]
const WelcomeGreenRoom = () =>{
    const [checked, updateCheck] = useState(false)
    const [ageCheck, updateAge] = useState(false)
    const [smartPhone, checkSmall] = useState(false)
    const cannabisStatement = "Expert solutions for Superior cannabis hydroponics"
    const windowSize = window.innerWidth;
    const smartPhoneWidth = 412;
    const mediumWidth = 560;
    const handleChange = () =>{ if (checked){
         updateCheck(false)} 
         else {
            updateCheck(true)
            updateAge(true)
        } 
        
        }
    
    useEffect(()=>{
        if (windowSize >= 1000){
            checkSmall(false)
        }
        else if (smartPhoneWidth => windowSize){
            checkSmall(true)
        } 
        else if (mediumWidth => windowSize) {
            checkSmall(true)
        } 
        else if (windowSize > 720){
            checkSmall(false)
        }
        else if (windowSize <= 800){
            checkSmall(true)
        }

    },[smartPhoneWidth, windowSize, smartPhoneWidth, mediumWidth])

    

    return(<>
            <div className="greenroom">
                <Navigate smartPhone={smartPhone} />
                 <Routes>
                    <Route index element={<PotCards cannabisStatement={cannabisStatement} smartPhone={smartPhone} />} />
                    <Route path="/" element={<PotCards cannabisStatement={cannabisStatement} smartPhone={smartPhone} />} />
                        <Route path="/hydro" element={<Hydro />} />
                        <Route path="/kits" element={<Kits kits={kits} />}  > 
                          <Route path=":kitId" element={<Kit kit={kits} smartPhone={smartPhone} />}/>
                        </Route> 
                    <Route path="/sci" element={<Sci />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/buy" element={<Buy checked={checked} handleChange={handleChange} />} />
                 </Routes>
                <Outlet />
            </div>
           </>)
}

export default WelcomeGreenRoom