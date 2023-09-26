import React, { useId, useState, useContext } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { CartProducts } from "./cartProducts";
import { Context } from "../store/appContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


export const Cart = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { store, actions } = useContext(Context);

  return (
    <>
      <label>
        <Button className="cart-button" style={{backgroundColor:"#A51890" }} onClick={handleShow}>
          <ShoppingCartIcon
            className="icon"
            style={{ height: "1.2rem", width: "1.2rem", color: "#fff" }}
          />&nbsp;
          {store.cart.length}&nbsp;items
        </Button>
      </label>

      <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartProducts products={store.cart} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
