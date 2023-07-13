import {
    useParams, Link, Outlet
  } from 'react-router-dom';
  
import '../scss/index.scss'
import '../scss/kit.scss'

const Kit = ({key, img, alt, des, title, id}) =>{
    
    const {kitId} = useParams();
    debugger
    return(<div key={key} className="d-flex flex-column justify-content-center mx-auto text-warning hydrokit">
                <h2 className="mx-auto fw-bolder fst-italic">{title}</h2>
                <p className="mx-auto fs-2 fw-bolder text-black">{des}</p> 
                <img src={img} alt={alt} className="mx-auto rounded-circle" width={"200px"} height={"200px"}/>
                <Link className="mx-auto" to={`/kits/${id}`}>{title}</Link>
                <Link className="mx-auto" to="/kits">Back</Link>
                <Outlet />
          </div>)
}

export default Kit;