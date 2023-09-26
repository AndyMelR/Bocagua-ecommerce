import React, { useContext, useState } from "react";
import "../../styles/index.css";

const Contacto = () => {
    return (
      <>
        <div className="container-fluid mt-5 mb-5">
          <div className="containerHeader d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"#425563", color:"#fff"}}>
          <h1 className="tituloFormu d-flex justify-content-center pt-3"> Queremos saber de ti! </h1>
          <p className="textFormu d-flex ps-3 pb-2">En Bocagua, nos importas tú. Si tienes algún requerimiento específico, alergias o intolerancias, nuestro Pedido ADOC está a tu disposición. ¡Escríbenos y haremos todo lo posible para hacer de tu experiencia algo dulce y satisfactorio!</p>
          </div>
          <div className="row d-flex justify-content-center ">
          <div className="md-5 g-3">
              <h3 className="d-flex justify-content-center"> Formulario de contacto</h3>
                <form className="containerForm container-md border rounded border-2 p-3 mt-3">
                  <div className="form-group">
                    <label for="firstName">Nombre</label>
                    <input
                      type="text"
                      className="form-control  rounded-pill border-1 shadow-sm"
                      id="firstName"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group">
                    <label for="lastName">Apellido</label>
                    <input
                      type="text"
                      className="form-control rounded-pill border-1 shadow-sm"
                      id="lastName"
                      placeholder="Apellido"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control  rounded-pill border-1 shadow-sm "
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="phone">Número de teléfono</label>
                    <input
                      type="text"
                      className="form-control  rounded-pill border-1 shadow-sm"
                      id="phone"
                      placeholder="xxx-xxx-xxx"
                    />
                  </div>
                  <div className="form-group">
                    <label for="message">Tu mensaje</label>
                    <textarea
                      className="form-control  rounded-pill border-1 shadow-sm"
                      id="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btnEnviar btn mt-3 btn-light btn-lg m-2 border"
                     style={{
                      backgroundColor: "#A51890",
                      color: "#fff",
                    }}>
                      Enviar
                    </button>
                  </div>
                 
                </form>
              </div>
              <h3 className="d-flex justify-content-center mt-5">Donde estamos</h3>
            <div className="md-5 g-3 d-flex justify-content-around">
            
              <div id="map" className="container_map ms-2 mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12305.183898759153!2d2.6941291!3d39.5529334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297933e04d68079%3A0x988d4ce0f0712ca2!2sBocagua%20-%20Reposteria%20Saludable!5e0!3m2!1ses!2ses!4v1683454072301!5m2!1ses!2ses"
                  width={500}
                  height={350}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
              </div>
              <div id="map" className="container_map ms-2 mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12301.20815507966!2d2.6418787697753907!3d39.57534269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792572cfe3f8d%3A0x15761a18c13574cd!2sCarrer%20de%20Font%20i%20Monteros%2C%204%2C%2007003%20Palma%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1684859887907!5m2!1ses!2ses"
                  width={500}
                  height={350}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
              </div>
            </div>
           
            </div>
            </div>
          
      </>
    );
}

export default Contacto