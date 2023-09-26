import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Success from "./pages/successPage";
import { Cancel } from "./pages/cancel";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Signup from "./pages/signup.js";
import Login from "./pages/login.js";
import Private from "./pages/private.js";
import Nosotros from "./pages/nosotros";
import Productos from "./pages/productos";
import Catering from "./pages/catering";
import Contacto from "./pages/contacto";

//import TiendaOnline from "./pages/tiendaonline";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Private />} path="/private" />
            <Route element={<Nosotros />} path="/nosotros" />
            <Route element={<Productos />} path="/productos/:tipo" />
            <Route element={<Catering />} path="/catering" />
            <Route element={<Contacto />} path="/contacto" />
            <Route element={<Cancel />} path="/cancel" />
            <Route element={<Success />} path="/success" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
