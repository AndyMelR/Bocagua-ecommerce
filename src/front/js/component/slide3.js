import React from "react";
import km0 from "../../img/km0.png";
import manSana from "../../img/manSana.png";
import { Link } from "react-router-dom";


export const Slide3 = () => {
    return (<>
        <div className="d-flex h-full justify-content-between align-items-stretch">
            <img src={km0} className="" alt="..."/>
            <div className="d-flex flex-column justify-content-center align-items-center ms-4 me-2"> 
          <h1 className="m-4">KM 0</h1>
          <p className="d-flex text-center" style={{fontSize: 20}}>Estamos comprometidos con un consumo sostenible y por ello trabajamos con productos locales, que sean de temporada y siempre,ecológicos. Asimismo, optamos por adoptar recetas locales y fusionarlas con creatividad,obteniendo un producto más saludable y absolutamente delicioso.</p>
          <p className="d-flex text-center" style={{fontSize: 23}}>¡Te esperamos con los brazos abiertos en nuestra acogedora bakery!</p>
          <Link to="/contacto">
            <h5>Quiero ir a alguno de vuestros locales!!</h5>
          </Link>
          </div>
          
            
        <img className="w-25 align-self-end p-4" src={manSana} alt="..."/>
        </div>
        </>)
}  
