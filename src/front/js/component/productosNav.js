import React from "react";
import { Product } from "../component/product";
import "../../styles/catering.css";
import { ProductList } from "./productList";
import Pan_sarraceno_sin_gluten from "../../img/product-images/product-image-size-panes/PanSinGlutenSarraceno.png";
import Pan_sarraceno_eco from "../../img/product-images/product-image-size-panes/PanSarracenoEco.png";
import Pan_algarroba_centeno from "../../img/product-images/product-image-size-panes/PanAlgarrobaCentenoNuez.png";
import Xeixa_pan from "../../img/product-images/product-image-size-panes/Xeixa.png";
import Xeixa_integral_ecologico from "../../img/product-images/product-image-size-panes/XeixaIntegralEcologico.png";
import Coca_tomate_espinaca from "../../img/product-images/product-image-size-panes/CocaTomateEspinaca.png";
import Babka_d from "../../img/product-images/product-image-size-dulces/Babka.png";
import Cookies_choco_avellana from "../../img/product-images/product-image-size-dulces/CookiesChocoAvellana.png";
import Cookies_choco_brownie from "../../img/product-images/product-image-size-dulces/CookiesChocoBrownie.png";
import Cookies_penaut_butter from "../../img/product-images/product-image-size-dulces/CookiesPenautButter.png";
import Muffin_apple_pie from "../../img/product-images/product-image-size-dulces/MuffinApplePie.png";
import Muffin_banana_tahini from "../../img/product-images/product-image-size-dulces/MuffinBananaTahini.png";
import Apple_pie from "../../img/product-images/product-image-size-tartas/ApplePie.png";
import Banana_bread from "../../img/product-images/product-image-size-tartas/BananaBread.png";
import Carror_cake from "../../img/product-images/product-image-size-tartas/CarrotCake.png";
import Cheese_cake from "../../img/product-images/product-image-size-tartas/CheeseCake.png";
import Platano_flambeado from "../../img/product-images/product-image-size-tartas/PlatanoFlambeado.png";
import Red_velvet from "../../img/product-images/product-image-size-tartas/RedVelvet.png";
import Brossat from "../../img/product-images/product-image-size-tartas/TartaletaBrossat.png";
import Tarta_albaricoque from "../../img/product-images/product-image-size-tartas/TartaAlbaricoque.png";
import Brownie_matcha from "../../img/product-images/product-image-size-tartas/BrownieMatcha.png";
import Tartaleta_applepie from "../../img/product-images/product-image-size-tartas/TartaletaApplePie.png";
import { useParams } from "react-router-dom";

const PanSinGlutenSarraceno = {
  id:"price_1NAvPsKAy29DnV9KdzXDN0JP",
  name: "Pan sin gluten Sarraceno 1 kg",
  img: Pan_sarraceno_sin_gluten,
  description: "Hogaza de trifo sarraceno, teff y semillas. Harinas Eco",
  allergens: "Alergenos: SG",
  weight: 1000,
  price: 9.60 ,
};

const PanSarracenoRustico = {
  id:"price_1NAvPsKAy29DnV9KGdsPZsFy",
  name: "Pan Sarraceno Rustico 500g",
  img: Pan_sarraceno_eco,
  description: "Hogaza de trigo sarraceno, teff y semillas de chía. Harinas Eco",
  allergens: "Alergenos: SG",
  weight: 500,
  price: 4.80 ,
};

const PanAlgarrobaCenteno = {
  id:"price_1NBBtfKAy29DnV9KZCbALAgo",
  name: "Pan Algarroba de Centeno con Nuez",
  img: Pan_algarroba_centeno,
  description: "Pan de algarroba con harina de centeno, fuerza semi integral y nueces",
  allergens: "Alergenos: Nuez",
  weight:1000,
  price: 10,
};

const XeixaEco500 = {
  id:"price_1NBBvbKAy29DnV9KGTxxum5D",
  name: "Xeixa Eco 500gr",
  img: Xeixa_pan,
  description: "Pan Xeixa",
  allergens: "Alergenos:",
  price: 4.90,
};

const XeixaIntegralEcologico = {
  id: "price_1NBCXtKAy29DnV9Kr7MSmUS2",
  name: "Xeixa Integral Ecologico 1kg",
  img: Xeixa_integral_ecologico,
  description: "Harinas ecológicas Xeixa y fuerza semiintegral",
  allergens: "Alergenos: gluten",
  weight: 500,
  price: 10,
};

const CocaTomateEspinacas = {
  id:"price_1NAvlFKAy29DnV9KjQranBba",
  name: "Coca de Espinaca y Tomate sin gluten",
  img: Coca_tomate_espinaca,
  description: "Coca de espinacas con tomates cherry",
  allergens: "Alergenos:SG",
  price: 25,
};

const productListPan = [
  PanSinGlutenSarraceno,
  PanSarracenoRustico ,
  PanAlgarrobaCenteno,
  XeixaEco500,
  XeixaIntegralEcologico,
  CocaTomateEspinacas,
];

const CookiesChocoBrownie = {
  id:"price_1NBBygKAy29DnV9KXQmpdAtt",
  name: "Cookies Choco Brownie",
  img: Cookies_choco_brownie,
  description: "Cookies de brownie de chocolate. Veganas. Sin Gluten",
  allergens: "Alergenos: Frutos secos",
  price: 2.80,
};

const Babka = {
  id:"price_1NBC0bKAy29DnV9KvzFbDp5e",
  name: "Babka",
  img: Babka_d,
  description: "Babka",
  allergens: "Alergenos: Frutos secos",
  price: 3.50,
};

const CookiesChocoChipsAvellana = {
  id:"price_1NBC5yKAy29DnV9KjLVHL3Ij",
  name: "Cookies de Choco y Avellana",
  img: Cookies_choco_avellana,
  description: "Cookies de chocolate y avellana",
  allergens: "Alergenos: Frutos secos",
  price: 2.80,
};

const CookiesPenautButter = {
  id:"price_1NBC7vKAy29DnV9K6VqgsfZc",
  name: "Cookies Penaut Butter",
  img: Cookies_penaut_butter,
  description: "Cookies de penaut butter",
  allergens: "Alergenos: Frutos secos",
  price: 2.50,
};

const MuffinsAppelPie = {
  id:"price_1NBCAoKAy29DnV9KtSJi5Xmf",
  name: "Muffin Appel Pie",
  img: Muffin_apple_pie,
  description: "Muffins appel pie veganos",
  allergens: "Alergenos: Frutos secos",
  price: 2.90,
};

const MuffinsPlatanoyTahini = {
  id:"price_1NBCCtKAy29DnV9KszUJ4l2b",
  name: "Muffin de Platano y Tahini",
  img: Muffin_banana_tahini,
  description: "Muffins de platano y tahini",
  allergens: "Alergenos: Frutos secos",
  price: 2.80,
};

const productListDulces = [
  CookiesChocoBrownie,
  Babka,
  CookiesChocoChipsAvellana,
  CookiesPenautButter,
  MuffinsAppelPie,
  MuffinsPlatanoyTahini,
];

const ApplePieVeganaSinGluten = {
  id:"price_1NBBjSKAy29DnV9KxR92Z8wy",
  name: "Apple Pie",
  img: Apple_pie,
  description: "Vegana, sin gluten y con nueces",
  allergens: "Alergenos: Nueces",
  price: 35,
};
const BannanaBreadVegano = {
  id:"price_1NBCEAKAy29DnV9KLsPq1FkZ",
  name: "Banana Bread",
  img: Banana_bread,
  description: "Vegano",
  allergens: "Alergenos: Nueces",
  price: 28,
};

const CarrotCakeSmall = {
  id:"price_1NATMsKAy29DnV9KwfmRpJrr",
  name: "Carrot Cake",
  img: Carror_cake,
  description: "Vegana con nueces",
  allergens: "Alergenos: Nueces",
  price: 22,
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
const PlatanoFlambeado = {
  id:"price_1NBCKmKAy29DnV9KgP9HOduB",
  name: "Platano Flambeado",
  img: Platano_flambeado,
  description:
    "Con crema de vainilla y queso. Sin azúcares, a base de pasta de dátil casera y sirope de arce.SG",
  allergens: "Alergenos:SA,SG",
  price: 25,
};
const RedVelvet = {
  id:"price_1N8P7FKAy29DnV9KSP3Gz6g2",
  name: "Red Velvet",
  img: Red_velvet,
  description: "Sin azúcares, a base de pasta de dátil casera y sirope de arce",
  allergens: "Alergenos:",
  price: 24,
};
const TartaChocoPralineAvellana = {
  id:"price_1NBCMxKAy29DnV9KOSaj1VWI",
  name: "Tartaleta de Brossat",
  img: Brossat,
  description: "Tarta de chocolate negro y praline de avellanas",
  allergens: "Alergenos: Frutos secos",
  price: 35, 
};
const TartaAlbaricoque = {
  id:"price_1NBCPFKAy29DnV9KDjL2KblD",
  name: "Tarta de Albaricoque",
  img: Tarta_albaricoque,
  description: "Tarta de albaricoque y canela. Sin Gluten",
  allergens: "Alergenos: ",
  price: 25, 
};

const TeMatchaChoco = {
  id:"price_1NBCRGKAy29DnV9K9SdJZIBD",
  name: "Brownie de Matcha y Chocolate",
  img: Brownie_matcha,
  description: "Brownie de matcha y chocolate",
  allergens: "Alergenos:",
  price: 4.90, 
};

const TartaletasAppelPie = {
  id:"price_1NBCSPKAy29DnV9KCcvwVzLJ",
  name: "Tartaletas de Appel Pie",
  img: Tartaleta_applepie,
  description: "Tartaletas de appel pie",
  allergens: "Alergenos:",
  price: 15,
};

const productListTartas = [
  ApplePieVeganaSinGluten,
  BannanaBreadVegano,
  CarrotCakeSmall,
  CheesecakeSinGluten,
  PlatanoFlambeado,
  RedVelvet,
  TartaChocoPralineAvellana,
  TartaAlbaricoque,
  TeMatchaChoco,
  TartaletasAppelPie,
];

const ProductosNav = () => {
  const params = useParams();
  return (
    <>
    
      <nav className= "background-productos " style={{backgroundColor: "#fff"}} >
      <h1 className= "d-flex justify-content-center pt-5 txt-titulo-producto" >Nuestros Productos</h1>
      <div>
      <p className="intro-productos mx-5 p-5" style={{fontSize: "1.2rem"}}><i>"Entre nuestros productos encontrarás siempre opciones con harinas sin gluten ecológicas, ingredientes de origen vegetal y la posibilidad de endulzar con fruta, pasta de datil casera o panela ecológica exclusivamente. No usamos azúcares refinados para comenzar a concienciar de que la buena alimentacion es una prioridad sobre todo para los mas pequeños"</i></p>
      </div>
        <div
          className="nav nav-tabs d-flex justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            className={`nav-link  ${params.tipo == "panes" ? "active" : ""}`}
         
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="link"
            role="tab "
            aria-controls="nav-home"
            aria-selected="true"
          >
            Panes
          </button>
          <button
            className={`nav-link ${params.tipo == "dulces" ? "active" : ""}`}
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="link"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Dulces
          </button>
          <button
            className={`nav-link ${params.tipo == "tartas" ? "active" : ""}`}
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="link"
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
          className={`tab-pane fade ${
            params.tipo == "panes" ? "show active" : ""
          }`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <ProductList list={productListPan} />
        </div>
        <div
          className={`tab-pane fade ${
            params.tipo == "dulces" ? "show active" : ""
          }`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <ProductList list={productListDulces} />
        </div>
        <div
          className={`tab-pane fade ${
            params.tipo == "tartas" ? "show active" : ""
          }`}
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <ProductList list={productListTartas} />
        </div>
      </div>
    </>
  );
};
export default ProductosNav;
