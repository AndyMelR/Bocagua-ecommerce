import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Babka_d from "../../img/product-images/product-image-size-dulces/Babka.png";

export const BestsellersList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBestsellers();
  }, []);

  return (
    <div className="card-deck d-flex flex-row gap-3 m-4">
      {store.bestsellers?.bestsellers.map((bestseller) => (
        <div className="card" key={bestseller.id}>
         
          <div className="card-body">
            <h5 className="card-title">{bestseller.product.name}</h5>
            <p className="card-text">{bestseller.product.description}</p>
            <p className="card-text">{bestseller.product.allergens}</p>
            <p className="card-text">{bestseller.product.price}</p>
          </div>
          <div className="card-footer">
            <button
              className="bestsellerBtn btn btn-outline-light m-2"
              style={{ backgroundColor: "#6ac2b4", color: "#425563" }}
              onClick={() => actions.addProductToCart(bestseller.product)}
            >
              Añadir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
