import { Link, Outlet } from 'react-router-dom';
import Home from './pictures/—Pngtree—vector house icon_4013530.png'
import Pipe from './pictures/pipes_86255.png'
import Sci from './pictures/sci.png'
import Phone from './pictures/phone.png'
import People from './pictures/people.png'
import Shopping from './pictures/shopping.png'
import './scss/greenroom.scss'
import './scss/navbar.scss'
import Weed from './pictures/Yellow-Leaf-Small.png'

const Navigate = ({smartPhone}) =>{
   
    return(<>
            <nav className='Nav justify-content-center align-text-bottom mx-auto p-4'> 
                <img className="compass align-top rounded-circle not-on-sm" src={Weed} alt="navigation" />
                <Link className={`${smartPhone ? "pb-2" : "p-4"} bg-white rounded`} to="/"><img src={Home} height={smartPhone ? "50px" : "100px"} width={smartPhone ? "50px" : "100px"}/></Link>
                <Link className={`${smartPhone ? "pb-2" : "p-4"} bg-white rounded`} to="/kits"><img src={Pipe} height={smartPhone ? "50px" : "100px"} width={smartPhone ? "50px" : "100px"}/></Link>
                <Link className={`${smartPhone ? "pb-2" : "p-4"} bg-white rounded`} to="/sci"><img src={Sci} height={smartPhone ? "50px" : "100px"} width={smartPhone ? "50px" : "100px"}/></Link>
                <Link className={`${smartPhone ? "pb-2" : "p-4"} bg-white rounded`} to="/contact"><img src={Phone} height={smartPhone ? "50px" : "100px"} width={smartPhone ? "50px" : "100px"}/></Link>
                <Link className={`${smartPhone ? "pb-2" : "p-4"} bg-white rounded`} to="/customers"><img src={People} height={smartPhone ? "50px" : "100px"} width={smartPhone ? "50px" : "100px"}/></Link>
                <Link className={`${smartPhone ? "pb-2" : "p-4"} bg-white rounded`} to="/buy"><img src={Shopping} height={smartPhone ? "50px" : "100px"} width={smartPhone ? "50px" : "100px"}/></Link>
            </nav>
            <Outlet />
           </>)
}

export default Navigate