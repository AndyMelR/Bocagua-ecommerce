import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./product";
import "../../styles/our-products.css";
import img_tarta from "../../img/productos-tartas.png";
import img_pan from "../../img/productos-panes.png";
import img_dulce from "../../img/productos-dulces.png";

export const OurProducts = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="p-5 txt-productos-home">Nuestros Productos</h1>
        <div className="card-group gap-2">
          
          <div className="card m-4 border-0 bg-transparent" style={{ width: "20rem" }}>
            <img src={img_pan} className="card-img-top border border-light border-5 rounded" alt="foto de pan" />
            <div className="card-body d-flex flex-column justify-content-center align-items-center mt-3">
              <h5 className="card-title pb-2 txt-productos-home">Panes, cocas y empanadas</h5>
              <Link to="/productos/panes">
              <button className="btn btn-outline-light m-2" style={{backgroundColor:"#A51890"}}> Ver productos</button>
              </Link>
            </div>
          </div>
          <div className="card m-4 border-0 bg-transparent" style={{ width: "20rem"}}>
            <img src={img_dulce} className="card-img-top border border-light border-5 rounded" alt="foto tartaletas" />
            <div className="card-body d-flex flex-column justify-content-center align-items-center mt-3">
              <h5 className="card-title pb-2 txt-productos-home">Dulces</h5>
              <Link to="/productos/dulces">
              <button className="btn btn-outline-light m-2" style={{backgroundColor:"#A51890"}}> Ver productos</button>
              </Link>
            </div>
            
          </div>
          <div className="card m-4 border-0 bg-transparent" style={{ width: "20rem" }}>
            <img src={img_tarta} className="card-img-top border border-light border-5 rounded" alt="foto de tarta" />
            <div className="card-body d-flex flex-column justify-content-center align-items-center mt-3">
              <h5 className="card-title pb-2 txt-productos-home">Tartas</h5>
              <Link to="/productos/tartas">
              <button className="btn btn-outline-light m-2" style={{backgroundColor:"#A51890"}}> Ver productos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

