import React from "react";
import { Link } from "react-router-dom";
import logo_nav from "../../img/sello_blanco.png";
import { Cart } from "../component/cart";

import { UserCircleIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#45BDAA" }}
    >
      <div className="container-fluid pe-3 ps-3">
        <div>
          <Link to="/">
            <a className="navbar-brand " href="#">
              <img src={logo_nav} height="100px" />
            </a>
          </Link>
        </div>
        <div className="menuContainer  d-flex justify-content-between gap-3">
          <div className=" me-auto">
            <Link to="/productos/panes">
              <button className="btn btn-outline-light m-2">Productos</button>
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
          </div>
          <div className="containerNavIcons d-flex gap-3 align-items-center">
            <Link to="/signup">
              <div>
                <UserCircleIcon
                  className="icon"
                  style={{ height: "2rem", width: "2rem", color: "#fff" }}
                />
              </div>
            </Link>

            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
