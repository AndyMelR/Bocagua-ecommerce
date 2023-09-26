import React from "react";
import { Product } from "./product";
import ApplePieVeganaSinGluten from "../../img/product-images/apple-pie-vegana-sin-gluten.JPG";
import BannanaBreadVegano from "../../img/product-images/banana-bread-vegano.JPG";
import CarrotCake from "../../img/product-images/carrot-cake.jpg";
import CheesecakeSinGluten from "../../img/product-images/cheesecake-queso-do-sin-gluten.jpg";
import PlatanoFlambeado from "../../img/product-images/platano-flambeado-sin-azucar.JPG";
import RedVelvet from "../../img/product-images/red-velvet.JPG";
import TartaChocoPralineAvellana from "../../img/product-images/tarta_choco_con_praline_avellana.JPG";
import TartaAlbaricoque from "../../img/product-images/tarta-albaricoque-y-canela-sin-gluten-o-vegana.JPG";


//revisar ALERGENOS EN TODOS!!!
const ApplePieVeganaSinGluten = {
  name: "Apple Pie",
  img: { ApplePieVeganaSinGluten },
  description: "Vegana, sin gluten y con nueces",
  price: 4,
  allergens: "Nueces",
};
const BannanaBreadVegano = {
  name: "Banana bread con nueces",
  img: { BannanaBreadVegano },
  description: "Vegano",
  price: 3.8,
  allergens: "Nueces",
};
const CarrotCakeSmall = {
  id: "price_1NATMsKAy29DnV9KwfmRpJrr",
  name: "Carrot Cake",
  img: { CarrotCake },
  description: "Vegana con nueces",
  price: 3,
  allergens: "Nueces",
};
const CheesecakeSinGluten = {
  name: "Cheesecake D.O.",
  img: { CarrotCakeMuffins },
  description:
    "Base de galleta casera sin gluten, elaborado con quesos denominación de origen",
  price: 4,
  allergens: "Lactosa",
};
const PlatanoFlambeado = {
  name: "Red Velvet",
  img: { PlatanoFlambeado },
  description: "Con crema de vainilla y queso. Sin azúcares, a base de pasta de dátil casera y sirope de arce.",
  price: 4,
  allergens: "",
};
const RedVelvet = {
  name: "Red Velvet",
  img: { RedVelvet },
  description: "Sin azúcares, a base de pasta de dátil casera y sirope de arce",
  price: 4,
  allergens: "",
};
const TartaChocoPralineAvellana = {
  name: "Tartaleta de brossat",
  img: { TartaChocoPralineAvellana },
  description: "Tarta de chocolate negro y praline de avellanas",
  price: 3.5, //revisar el precio
  allergens: "",
};
const TartaAlbaricoque = {
  name: "Tarta de albaricoque",
  img: { TartaAlbaricoque },
  description: "Tarta de albaricoque y canela. Sin Gluten",
  price: 3.5, //revisar precio
  allergens: "",
};



const productListTartas = [
  ApplePieVeganaSinGluten,
  BannanaBreadVegano,
  CheesecakeSinGluten,
  CarrotCakeSmall,
  PlatanoFlambeado,
  RedVelvet,
  TartaChocoPralineAvellana,
  TartaAlbaricoque,
];

const TartasNav = () => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Tartas
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">

        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <ProductList list={productListTartas}/>
        </div>
      </div>
    </>
  );
};
export default TartasNav;
