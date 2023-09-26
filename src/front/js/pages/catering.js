import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import background from "../../img/hero_banner4.png";
import "../../styles/catering.css";

const Catering = () => {
  return (
    <>
      <section
        className="h-full d-flex background-catering-image justify-content-center align-items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div>
          <div className="d-flex flex-column align-items-center">
            <h1 className="catering letressize">Catering</h1>
          </div>
        </div>
      </section>
      <section className="h-56 d-flex background-catering justify-content-center align-items-center">
        <div className="txt-catering d-flex flex-column align-items-center p-5 m-5">
          <p className="mt-2 p-3 rounded mb-5 txt-productos"style= {{backgroundColor: "#FFC658" }}>
            NO SOMOS UNA PASTELERIA CUALQUIERA
          </p>
      
          <p>Encárganos tu tarta de cumpleaños, surtidos dulces y salados para eventos.</p>
          <p>Necesitas opciones saludables patra fiestas infantiles?</p>
          <p>Familiares o amigos con necesidades especiales de alimentación?</p>
          <p>Cajas de desayunos, comidas o cenas para eventos..Hecho!</p>
          <p>Que quieres un pastal espectacular y riquísimo pero con ingredientes saludables, pues sí! Lo tenemos!</p>
          <hr></hr>
          <h4><strong>Preocúpate de disfrutar y nosotros haremos que sea de la forma más saludable posible</strong>
          </h4>
          <Link to="/contacto">
            <button type="button" className="btn-catering btn btn-outline-light mt-3">
              Haz tu pedido!
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Catering;
