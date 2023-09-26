import React, { useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Cookies_choco_brownie from "../../img/product-images/product-image-size-dulces/CookiesChocoBrownie.png"
import Muffin_apple_pie from "../../img/product-images/product-image-size-dulces/MuffinApplePie.png"
import Brownie_matcha from "../../img/product-images/product-image-size-tartas/BrownieMatcha.png"
import Cheese_cake from "../../img/product-images/product-image-size-tartas/CheeseCake.png"
import organic_stamp from "../../img/organic-stamp.png";

const BestsellersM = () => {
  const {store, actions} = useContext(Context);
  

  useEffect(() => {
    actions.getBestsellers();
  }, []);


  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="p-3 " style={{ color: "white" }}>
          Nuestros Bestsellers!
        </h1>
        <div className="card-group gap-2">
          <div className="card m-4 border-0 bg-transparent" style={{ width: "18rem" }}>
            <img src={Cookies_choco_brownie} className="card-img-top border border-light border-5 rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{color: "white"}}>Cookies Choco Brownie</h5>
              <p className="card-text" style={{color: "white"}}>Cookies de brownie de chocolate</p>
              <p className="card-text" style={{color: "white"}}>3</p>
              <p className="card-text" style={{color: "white"}}>Alérgenos: Frutos secos</p>
            </div>
            
              <button
                className="btn btn-outline-light m-2"
                onClick={({product}) => actions.addProductToCart(product)}
              >
                Comprar
              </button>
            
          
          </div>
          <div className="card m-4 border-0 bg-transparent" style={{ width: "18rem" }}>
            <img src={Muffin_apple_pie} className="card-img-top border border-light border-5 rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{color: "white"}}>Muffin Appel Pie</h5>
              <p className="card-text" style={{color: "white"}}>Muffins appel pie veganos</p>
              <p className="card-text" style={{color: "white"}}>3.5</p>
              <p className="card-text" style={{color: "white"}}>Alérgenos: Frutos secos</p>
            </div>
              <button
                className="btn btn-outline-light m-2" 
                onClick={({product}) => actions.addProductToCart(product)}
              >
                Comprar
              </button>
          
          </div>
          <div className="card m-4 border-0 bg-transparent" style={{ width: "18rem" }}>
            <img src={Brownie_matcha} className="card-img-top border border-light border-5 rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{color: "white"}}>Brownie de Matcha y Chocolate</h5>
              <p className="card-text" style={{color: "white"}}>Brownie de matcha y chocolate</p>
              <p className="card-text" style={{color: "white"}}>3.5</p>
              <p className="card-text" style={{color: "white"}}>Alérgenos:</p>
            </div>
            
              <button
                className="btn btn-outline-light m-2" 
                onClick={({product}) => actions.addProductToCart(product)}
              >
                Comprar
              </button>
        
          
          </div>
          <div className="card m-4 border-0 bg-transparent" style={{ width: "18rem" }}>
            <img src={Cheese_cake} className="card-img-top border border-light border-5 rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{color: "white"}}>Cheese Cake D.O</h5>
              <p className="card-text" style={{color: "white"}}>Base de galleta casera sin gluten, con quesos D.O</p>
              <p className="card-text" style={{color: "white"}}>4</p>
              <p className="card-text" style={{color: "white"}}>Alérgenos: Lactosa</p>
            </div>
            
              <button
                className="btn btn-outline-light m-2" 
                onClick={({product}) => actions.addProductToCart(product)}
              >
                Comprar
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestsellersM;
