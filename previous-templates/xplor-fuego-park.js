import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: "Xplor Fuego",
  tourDescription:
    "Descripción¡Adéntrate en una aventura llena de adrenalina explorando la selva durante la noche! Vive esta emocionante experiencia nocturna en la profundidad de la selva.",
  tourVideo: "https://www.youtube.com/embed/3X0FvmUUo70",
  entries: [
    {
      entryImg: "/img/tours/xplor-fuego/xplor4.jpg",
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
      entryImg: "/img/tours/xplor-fuego/xplor4.jpg",
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
      entryImg: "/img/tours/xplor-fuego/xplor4.jpg",
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
      entryImg: "/img/tours/xplor-fuego/xplor4.jpg",
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
      entryImg: "/img/tours/xplor-fuego/xplor4.jpg",
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
      entryImg: "/img/tours/xplor-fuego/xplor4.jpg",
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
};
export default function XplortPark() {
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
