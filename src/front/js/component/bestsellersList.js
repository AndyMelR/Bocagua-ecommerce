import React, {useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const BestsellersList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBestsellers();
  }, []);

  return (
    <>
      <div className="card-deck d-flex flex-row gap-3 m-4">
        {store.bestsellers?.bestsellers.map((bestseller) => {
          console.log(bestseller)
          return (
            <div className="card">
              <img src={bestseller.product.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{bestseller.product.name}</h5>
                <p className="card-text">
                  {bestseller.product.description}
                </p>
                <p className="card-text">
                  {bestseller.product.allergens}
                </p>
                <p className="card-text">
                  {bestseller.product.price}
                </p>
              </div>
              <div className="card-footer">
                <button className="bestsellerBtn btn btn-outline-light m-2" style={{backgroundColor: "#6ac2b4", color:"#425563"}} onClick={actions.addProductToCart()}> Añadir </button>   
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

