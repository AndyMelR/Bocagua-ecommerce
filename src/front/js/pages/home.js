import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/catering.css";
import pattern from "../../img/pattern_landing.png";
import logo_landing from "../../img/logo_landing.png";
import { Slide1 } from "../component/slide1";
import { Slide2 } from "../component/slide2";
import { Slide3 } from "../component/slide3";
import { OurProducts } from "../component/our-products";
import BestsellersM from "../component/bestseller_m.js";
import { Bestsellers, BestsellersList } from "../component/bestsellersList";

export const Home = () => {
  return (
    <>
      <div>
        <section
          className="h-full background-landing d-flex justify-content-center align-items-center"
          style={{ backgroundImage: `url(${pattern})` }}
        >
          <img className="logo_landing" src={logo_landing} width="30%" />
        </section>
        <section className="h-full">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Slide1 />
              </div>
              <div className="carousel-item">
                <Slide2 />
              </div>
              <div className="carousel-item">
                <Slide3 />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section
          className="h-full background-productos-home d-flex justify-content-center align-items-center"
          //style={{ backgroundImage: `url(${bg_products})` }}
        >
          <OurProducts />
        </section>
        <section className="h-full background-productos-home d-flex justify-content-center align-items-center">
          <BestsellersM />
        </section>
      </div>
    </>
  );
};
