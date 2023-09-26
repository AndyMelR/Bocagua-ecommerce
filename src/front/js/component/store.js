import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "./productsStore";
//import ProductCard from "./productCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">
        Bienvenido a nuestra tienda virtual!
      </h1>
      <Row xs={1} md={3} lg={4} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
