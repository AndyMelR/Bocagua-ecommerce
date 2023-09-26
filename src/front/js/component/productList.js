import React, { useContext } from "react";

import { Context } from "../store/appContext";


import "../../styles/productos.css";

export const ProductList = (props) => {
  const product = props.product
  const { store, actions } = useContext(Context);
  const cart = store.cart;

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap background-productos aling-items-stretch gap-3 p-4">
        {console.log(props.list)}
        {props.list.map((product) => {
          return (
            <>
              <div className="card m-4 border-white " style={{ width: "20rem", backgroundColor: "#fff" }}>
                 <img src={product.img} className="card-img-top border-1 " alt="..." /> 
                <div className="card-body txt-productos">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text">{product.allergens}</p>
                </div>
                <div className="card-footer d-flex justify-content-center border-none">
                  <button className="card-btn btn btn-outline m-2" style={{ backgroundColor: "#A51890", color: "#fff"}} onClick={() => actions.addProductToCart(product)}>Añadir</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
