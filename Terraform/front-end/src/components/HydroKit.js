import "../css/Hydro.scss"

const HydroKit = ({title, message, handleHydro}) =>{

    return(<div className="hydro deeper child" onClick={(e)=>handleHydro(e)}>
            <h1 className="pt-5 deeper shadow-lg"><span className="highlight">{title}</span></h1>
          </div>)
}

export default HydroKit; 