import React from "react";
import { Product } from "../component/product";
import "../../styles/catering.css";
import { BestsellersList } from "./bestsellersList.js";
import Cheese_cake from "../../img/product-images/product-image-size-tartas/CheeseCake.png";
import Cookies_choco_brownie from "../../img/product-images/product-image-size-dulces/CookiesChocoBrownie.png";
import Muffin_apple_pie from "../../img/product-images/product-image-size-dulces/MuffinApplePie.png";
import Brownie_matcha from "../../img/product-images/product-image-size-tartas/BrownieMatcha.png";

const CookiesChocoBrownie = {
  id:"price_1NBBygKAy29DnV9KXQmpdAtt",
  name: "Cookies Choco Brownie",
  img: Cookies_choco_brownie,
  description: "Cookies de brownie de chocolate",
  allergens: "Alergenos: Frutos secos",
  price: 2.80,
};

const MuffinsAppelPie = {
  id:"price_1NBCAoKAy29DnV9KtSJi5Xmf",
  name: "Muffin Appel Pie",
  img: Muffin_apple_pie,
  description: "Muffins appel pie veganos",
  allergens: "Alergenos: Frutos secos",
  price: 2.90,
};

const CheesecakeSinGluten = {
  id:"price_1NBCHgKAy29DnV9Kdy7HrxdD",
  name: "Cheesecake D.O.",
  img: Cheese_cake,
  description:
    "Base de galleta casera sin gluten, elaborado con quesos denominación de origen",
  allergens: "Alergenos: Lactosa",
  price: 26,
};

const TeMatchaChoco = {
  id:"price_1NBCRGKAy29DnV9K9SdJZIBD",
  name: "Brownie de Matcha y Chocolate",
  img: Brownie_matcha,
  description: "Brownie de matcha y chocolate",
  allergens: "Alergenos:",
  price: 4.90, //revisar precio
};

const productListBestsellers = [
  CheesecakeSinGluten,
  CookiesChocoBrownie,
  MuffinsAppelPie,
  TeMatchaChoco,
];

const BestsellerNav = () => {
  return (
    <>
      <div>
        <BestsellersList list={productListBestsellers} />
      </div>
    </>
  );
};
export default BestsellerNav;
