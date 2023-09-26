import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";


 export const CartItem = ({ product, setTotal }) => {
    const {actions, store} = useContext(Context)

    useEffect(() => {
      setTotal((prevTotal) => prevTotal + product.price);
    }, [product.price, setTotal]);
  
    return (
      <>
        <div className="cartItem d-flex flex-column justify-evenly m-2 " >
          <div className="cartItem_image d-flex flex-column ">
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "5rem", height: "5rem" }}
            />
          </div>
          <div className="cartItem_info d-flex flex-column ">
            <h4>{product.name}</h4>
            <p>Unidades:  {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <Button size="sm" onClick={() =>{
              console.log("he clickado el boton de borrar")
              actions.deleteFromCart()

            }}>Quitar</Button>
            <hr></hr>
          </div>
        </div>
      </>
    );
  };