import './scss/greenroom.scss'
import Navigate from './Navigate.js'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Hydro from './Hydro'
import Users from './Users'
import PotCards from './PotCards'
import Contact from './Components/Contact'
import Sci from './Components/Sci'
import Kits from './Components/Kits'
import Kit from './Components/KitCard'
import Buy from './Components/Buy'

const WelcomeGreenRoom = () =>{


    return(<>
            <div className="greenroom">
                <Navigate />
                <Routes>
                    <Route index element={<PotCards />} />
                    <Route path="/" element={<PotCards />} />
                    <Route path="/hydro" element={<Hydro />} />
                    {/* <Route path="/kits" element={<Kits />} /> */}
                    <Route path="/kits" element={<Kits />}  />
                        
                    <Route path="/kits/:kitId" element={<Kit />}/>
                    {/* </Route>  */}
                    <Route path="users" element={<Users />} />
                    <Route path="/sci" element={<Sci />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/buy" element={<Buy />} />
                </Routes>
                <Outlet />
            </div>
           </>)
}

export default WelcomeGreenRoom