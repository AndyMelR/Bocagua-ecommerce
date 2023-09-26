import { Card, Button, Form, Row, Col} from 'react-bootstrap'
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


function ProductCard(props) { // props.product is the product we are selling
    const {store,actions} = useContext(Context)
    const cart = store.cart;
   const productQuantity = actions.getProductQuantity(product.id);

    return (
        <>
        <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}€</Card.Text>
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
            </Card.Body>
        </Card>
        </>
    )
}
export default ProductCard;