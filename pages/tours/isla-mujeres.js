import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: "Isla Mujeres",
  tourDescription:
    "Disfruta de un día espectacular en el Mar Caribe navegando desde Cancún a Isla Mujeres abordo de un asombroso catamarán con barra libre y mucha diversión. La Isla Mujeres es una isla mexicana en el mar Caribe, a 13 km de la costa de Cancún. Es un destino vacacional conocido por sus playas, como la Playa Norte, complejos turísticos y también por el esnórquel y el buceo en los arrecifes de coral circundantes.",
  tourVideo: "https://www.youtube.com/embed/ArsHZr--DEA",

  entries: [
    {
      entryImg: "/img/tours/isla-mujeres/braza.jpg",
      entryTitle: "Entrada básica",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      price: 1000,
    },
    {
      entryImg: "/img/tours/isla-mujeres/braza.jpg",
      entryTitle: "Entrada Xcaret plus",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      price: 5599.6,
    },
    {
      entryImg: "/img/tours/isla-mujeres/braza.jpg",
      entryTitle: "Entrada básica",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      price: 100,
    },
    {
      entryImg: "/img/tours/isla-mujeres/braza.jpg",
      entryTitle: "Entrada Xcaret plus",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      price: 5599.6,
    },
    {
      entryImg: "/img/tours/isla-mujeres/braza.jpg",
      entryTitle: "Entrada básica",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      price: 100,
    },
    {
      entryImg: "/img/tours/isla-mujeres/braza.jpg",
      entryTitle: "Entrada Xcaret plus",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      price: 5599.6,
    },
  ],
  gallery: [
    "/img/tours/isla-mujeres/isla1.jpg",
    "/img/tours/isla-mujeres/isla2.jpg",
    "/img/tours/isla-mujeres/isla3.jpg",
    "/img/tours/isla-mujeres/isla4.jpg",
  ],
};

export default function IslaPark() {
  // Aqui se hace la petición al endpoint para obtener tarjetas y se mandan al section
  const { entries } = DescriptionObj;
  return (
    <div>
      <Header />
      <Container>
        <Row className="">
          <Col xs={12} sm={12} md={6} className="">
            <TourDescription {...DescriptionObj}></TourDescription>
          </Col>
          <Col xs={12} sm={12} md={6} className="pt-4">
            <Container style={{ paddingTop: "4vh" }}>
              {entries.map((entry) => (
                <Entry {...entry}></Entry>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
