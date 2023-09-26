import React, { useContext, useState } from "react";
import "../../styles/nosotros.css";
import photo_nosotros from "../../img/nosotros-photo.png"

const Nosotros = () => {
  return (
    <>
      <div className="d-flex background-nosotros justify-content-center align-items-center">
        <img src={photo_nosotros} className="h-full" alt="foto nosotros" />
        <div className="txt d-flex flex-column justify-content-center align-items-center ps-5 pe-3">
          <h1 className="">¿Quienes Somos?</h1>
           <h5 className="mt-1 text-center p-3 mb-5 fs-4">¡Descubre la increíble historia de <strong>Bocagua</strong>, una familia apasionada por la cocina saludable!
Somos <strong>Bocagua</strong>, una familia que nace en junio de 2021 en Palma de Mallorca. En plena pandemia, decidimos combinar nuestro estilo de vida saludable con nuestra pasión por la buena comida. Así nació nuestra filosofía de alimentación única.
Desde que abrimos nuestro pequeño obrador, nos hemos dedicado a crear recetas deliciosas y saludables. Horneamos cada día con ingredientes de máxima calidad para que sientas que estás comiendo en casa.</h5>
          
          <h2>Nuestra Misión</h2>
          <p>
            <h5 className="mt-1 text-center p-3 fs-4">En <strong>Bocagua</strong>, queremos hacer que la repostería saludable sea accesible para todos. Cuéntanos qué te gustaría probar o si tienes alguna restricción alimentaria, y nos esforzaremos al máximo para regalarte el placer de disfrutar de un dulce delicioso.
En nuestros productos, encontrarás opciones con harinas sin gluten ecológicas, ingredientes de origen vegetal y endulzantes naturales como frutas, pasta de dátil casera y panela ecológica. Nos preocupamos por promover una alimentación saludable desde temprana edad, por eso evitamos los azúcares refinados.
En <strong>Bocagua</strong>, creemos que la buena alimentación es fundamental, ¡especialmente para los más pequeños! Únete a nosotros y descubre el delicioso mundo de la repostería saludable. ¡Te encantará!</h5>
          </p>
         
        </div>
      </div>
    </>
  );
};
export default Nosotros;
