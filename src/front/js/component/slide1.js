import React from "react";
import { Link } from "react-router-dom";
import dibujoDino from "../../img/dibujoDino.png";
import panMasamadre from "../../img/panMasamadre.png";


export const Slide1 = () => {
    return (<>
    <div  id="slide1" className="d-flex w-100 justify-content-between align-items-stretch">
        <img src={panMasamadre} className="h-full" alt="..."/>
        <div className="containerSlide1 d-flex flex-column text-align-center">
            <div className="header1" style={{marginTop:"50px", marginLeft:"10em"}}>
               <h1><strong>¡Bienvenidos al mundo de Bocagua!</strong></h1>
                <h5 >Somos una bakery que apuesta por la calidad de los productos locales.</h5>
            </div>
            <div className="masamadre ms-4" style={{marginTop:"50px"}}>
                <h1 className="d-flex text-center" style={{marginLeft:130}} >¿ Qué nos hace diferentes?</h1>
                <h2 className="d-flex text-center" style={{fontSize: 20, marginLeft:170}}>UNA MASA MADRE ÚNICA Y 100% NATURAL</h2>
                <p className="d-flex text-start" style={{fontSize:20,marginLeft:130}}>Elaboramos nuestra propia masa madre con mimo y cuidado para obtener panes de gran calidad, crujientes y con el sabor de siempre.</p>
                <h2 className="d-flex text-center"  style={{marginLeft:220}}>¡Pan con sabor a pan!</h2>
                <Link to="/contacto">
                <p className="d-flex text-center" style={{marginLeft:240}}>Quiero encargar pan o bollería saludable </p>
                </Link>
            </div>
        </div>
        <img className="w-25 align-self-end p-4" src={dibujoDino} alt="..."/>
    </div>
    
    </>)
}
