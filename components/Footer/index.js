import React, { Component } from "react";
import { Container } from "reactstrap";
class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <footer style={{ backgroundColor: "#2c292f", marginTop: "5%  " }}>
          <div className="container">
            <div className="row ">
              <div className="col-md-4 text-center text-md-left ">
                <div className="py-0">
                  <h3 className="my-4 text-white">
                    <span
                      className="mx-4 font-italic text-white "
                      style={{ fontSize: "25px" }}
                    >
                      {" "}
                      Tours
                    </span>
                  </h3>

                  <div className="footer-links font-weight">
                    <b>
                      <a
                        className="text-white"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        Tours en Cancún
                      </a>
                    </b>
                  </div>
                  <div className="footer-links font-weight">
                    <b>
                      <a
                        className="text-white"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        Tours en Playa del Carmen
                      </a>
                    </b>
                  </div>

                  <div className="footer-links font-weight">
                    <b>
                      {" "}
                      <a
                        className="text-white"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        Tours en Tulum
                      </a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Tours en Isla Mujeres</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Tours en Cozumel</a>
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center text-md-left ">
                <div className="py-0">
                  <h3 className="my-4 text-white">
                    <span
                      className="mx-4 font-italic text-white "
                      style={{ fontSize: "25px" }}
                    >
                      {" "}
                      Vacaciones Cancún
                    </span>
                  </h3>

                  <div className="footer-links font-weight">
                    <b>
                      {" "}
                      <a
                        class="text-white"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        Promociones
                      </a>
                    </b>
                  </div>
                  <div class="footer-links font-weight">
                    <b>
                      <a
                        class="text-white"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        Paquetes
                      </a>{" "}
                    </b>
                  </div>

                  <div class="footer-links font-weight">
                    <b>
                      {" "}
                      <a
                        class="text-white"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        Actividades
                      </a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Club Vacacional</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Términos y Condiciones</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Aviso de Privacidad</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Politicas de Cancelación</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Preguntas Frecuentes</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Seguridad</a>
                    </b>
                  </div>

                  <div
                    className="footer-links font-weight"
                    style={{ fontSize: "18px" }}
                  >
                    <b>
                      <a className="text-white">Garantia y Confianza</a>
                    </b>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-white my-4 text-center text-md-left ">
                <h3 className="my-1 text-white">
                  <span
                    className="mx-1 font-italic text-white "
                    style={{ fontSize: "25px" }}
                  >
                    Contactanos
                  </span>
                </h3>
                <div>
                  <p>
                    <i className="fa fa-phone  mx-2 "></i>
                    <a href="9982430489">+52 99-81-07-12-34</a>
                    <p>LLamanos si tienes alguna duda.</p>
                  </p>
                  <p>
                    <i className="fa fa-envelope  mx-2"></i>
                    <a href="hola@vacacionescancun.com">
                      hola@vacacionescancun.com
                    </a>
                    <p>Contactanos por email</p>
                  </p>
                  <p className="text-white">
                    {" "}
                    <i className="fa fa-map-marker mx-2 "></i>
                    Av.Bonampak Sm 6,Mz 1 Lote , Cancún Quintana Roo,Mexico.
                  </p>
                </div>

                <div className="socials social-links">
                  <p>Siguenos en nuestras redes sociales</p>
                  <a>
                    <i
                      class="fab fa-facebook"
                      href="https://www.instagram.com/vacaciones_cun/"
                    ></i>
                  </a>

                  <a>
                    <i
                      class="fab fa-instagram"
                      href="https://www.instagram.com/vacaciones_cun/"
                    ></i>
                  </a>
                  <i class="fab fa-youtube"></i>
                  <a></a>
                </div>
                <p className="text-light py-4 mb-4">
                  &copy;2021 Vacaciones Cancún.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    );
  }
}
export default Footer;
