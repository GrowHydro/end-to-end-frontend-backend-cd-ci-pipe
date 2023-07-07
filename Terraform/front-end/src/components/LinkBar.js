import { useNavigate } from "react-router-dom";
import HydroKit from "./HydroKit.js";
import '../css/LinksBar.scss'


const LinksBar = () =>{
    let navigate = useNavigate();
    function homeClick() {
      navigate("/");
    }
    const handleHydro =()=>{
        navigate("/HydroHome")
    }

    return(<div className="linksbar">
            <HydroKit handleHydro={handleHydro} title={"Hydro"}/>
          </div>)
}

export default LinksBar;