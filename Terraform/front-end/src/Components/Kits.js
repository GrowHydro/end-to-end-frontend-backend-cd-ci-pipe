import { Outlet } from 'react-router-dom';
import { KitData } from '../Data/KitsData';
import { useNavigate } from 'react-router-dom';
import '../scss/kit.scss'

const Kits =()=>{
    const nav = useNavigate();
    const makeKitCards = () =>{
        
           let cards = KitData.map((k, i) =><span className="d-flex flex-column bg-info my-2 mx-auto w-100">
                                    <div className="mx-auto" onClick={()=>{nav(`/kits/${k.id - 1}`)}}>
                                        <h1><a className="hex text-warning">{k.title}</a></h1>
                                        </div>
                                    </span>)
        return cards
    }


    return( <>
            <div className="d-flex flex-column justify-content-center mx-auto kits hex">
            <h1 className="mx-auto text-success">Grow Kits</h1>
            <p className="mx-auto fw-bolder fs-3 text-danger">Become your own Dispensary</p>
            <p className="mx-auto fw-bolder fs-4 text-warning">Grow all the Cannabis you want</p>
            {makeKitCards()}
            <Outlet />
           </div>
           </>)
}

export default Kits;