import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Button} from 'react-bootstrap';
import logo_nav from "../../img/sello_blanco.png";
import { Cart } from "../component/cart"


export const Navbar = () => {



    return (
        <>
        <Navbar expand="sm">
        
        <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              src={logo_nav}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Bocagua logo"
            />
          </Navbar.Brand>
          </Link>
        </Container>
        <Container>
        <Link to="/productos">
              <Button className=""></Button>
            </Link>
            <Link to="/nosotros">
              <button className="btn btn-outline-light m-2">Nosotros</button>
            </Link>
            <Link to="/catering">
              <button className="btn btn-outline-light m-2">Catering</button>
            </Link>
            <Link to="/contacto">
              <button className="btn btn-outline-light m-2">Contacto</button>
            </Link>



        </Container>
       
            

















        </Navbar>
        
        
        
        </>
    )
}