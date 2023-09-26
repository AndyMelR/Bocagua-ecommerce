import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";

export const CartProducts = ({ products }) => {
  const [total, setTotal] = useState(0);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const checkout = async () => {
    console.log(store)
    if (!!store.token ){
      const { url } = await actions.checkout();
      window.open(url);
    }else {
      navigate("/login")
    }
  };

  {/*const checkout = async () => {
    const {url} = await actions.checkout();
    window.open(url)
  }*/}

  return (
    <>
      <aside className="container-fluid">
        <div
          className="shippingContainer"
          style={{ backgroundColor: "#A51890", color: "#fff" }}
        >
          <span>
            <i class="fa-solid fa-truck" style={{ color: "#f7f7f8" }}></i>
          </span>
          <div>
            <p>Sólo recogida en tienda (Islas Baleares)</p>
          </div>
        </div>

        <div className="cartListContainer">
          <div className="cartItemList ">
            <div className="cartItemWrapper d-flex flex-column ">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  setTotal={setTotal}
                />
              ))}
            </div>
          </div>
          <div
            className="totalCounter d-flex align-items-start flex-column mb-3"
            style={{ backgroundColor: "#40C1AC", color: "#fff" }}
          >
            <h4 className="mt-auto p-2">
              Total: {Math.floor(total * 100) / 100} €
            </h4>
          </div>
          <div className="clearContrainer">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block m-3"
              onClick={() => actions.deleteAllProductsFromCart()}
            >
              Borrar todo
            </button>
          </div>
          <button
            className="btn btn-lg btn-block m-3"
            style={{ backgroundColor: "#A51890", color: "#fff" }}
            onClick={() => checkout()}
          >
            Finalizar Compra
          </button>
        </div>
      </aside>
    </>
  );
};
