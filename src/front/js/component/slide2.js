import React from "react";
import sinAzucar from "../../img/sinAzucar.png";
import panMasamadre from "../../img/panMasamadre.png";
import sugarFree from "../../img/sugarFree.png";
import { Link } from "react-router-dom";

export const Slide2 = () => {
    return (<>
    <div className="d-flex h-full justify-content-between align-items-stretch">
        <img className="w-25 align-self-end p-4" src={sugarFree} alt="sugar free dibujo"/>
        <div className="d-flex flex-column justify-content-center align-items-center ms-4 me-4"> 
          <h2>Descubre la dulce revolución de Bocagua:</h2>
          <h3 className="d-flex text-center" style={{fontSize:20}}>¡Productos sin azúcar añadido pero con un sabor excepcional!</h3>
          <p className="d-flex text-center mt-1" style={{fontSize:20}}> Nos preocupamos por tu bienestar, por eso endulzamos nuestros productos de forma natural. Utilizamos panela ecológica, un endulzante derivado de la caña de azúcar sin refinar, y sirope de ágave certificado ecológico. Estas alternativas más saludables te permiten disfrutar de tus dulces favoritos sin preocuparte por los efectos negativos del azúcar en tu salud. En Bocagua, creemos en una alimentación consciente y placentera.</p>
          <h4 className="d-flex text-center"> Únete a la filosofía Bocagua!!. </h4>
          <Link to="/productos/panes">
          <h5>Quiero probarlos todos</h5>
        </Link>
        </div>
      
        <img src={sinAzucar} className="w-25 align-self-end" alt="..."/>
    </div>
    </>)
}