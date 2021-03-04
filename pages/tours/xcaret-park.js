import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";
import useDeviceDetect from "../../components/DetectDevice";
const DescriptionObj = {
  tourTitle: "Parque Xcaret",
  tourDescription:
    "Xcaret es un parque acuático, temático, de diversiones, eco-arqueológico y más, en un solo lugar Por su ubicación privilegiada en la selva maya entre ríos subterráneos, cenotes y frente al imponente mar Caribe, tiene impresionantes escenarios los cuáles puedes disfrutar en diferentes actividades que aprovecha al máximo cada uno de ellos Además de los asombrosos escenarios naturales, Xcaret es un parque que celebra el presente y la rica historia del pasado de México, un país reconocido por sus tradiciones y cultura folclórica.",
  tourVideo: "https://www.youtube.com/embed/xTj1kJgYuHU",
  entries: [
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete1.jpg",
      entryTitle: "Entrada básica",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      quantity: 1000,
    },
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete1.jpg",
      entryTitle: "Entrada Xcaret plus",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      quantity: 5599.6,
    },
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete1.jpg",
      entryTitle: "Entrada básica",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      quantity: 100,
    },
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete1.jpg",
      entryTitle: "Entrada Xcaret plus",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      quantity: 5599.6,
    },
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete1.jpg",
      entryTitle: "Entrada básica",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      quantity: 100,
    },
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete1.jpg",
      entryTitle: "Entrada Xcaret plus",
      access: [
        "Acceso al parque",
        "Show Nocturno de Xcaret",
        "Sanitarios",
        "Vestidores y regaderas",
      ],
      quantity: 5599.6,
    },
  ],
  // Ver en la carpeta /public
  gallery: [
    "/img/tours/parque/parque.jpg",
    "/img/tours/parque/parque2.jpg",
    "/img/tours/parque/parque3.jpg",
    "/img/tours/parque/parque4.jpg",
  ],
};
export default function XcaretPark() {
  const { isMobile } = useDeviceDetect();
  let secondColumnSettings = isMobile ? { paddingTop: "4vh" } : { paddingTop: "4vh", maxHeight:"120vh", overflow:'scroll' }
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
          <Col xs={12} sm={12} md={6} className="pt-4" style={{}}>
            <Container style={secondColumnSettings}>
              {entries.map((entry,index) => (
                <Entry key={`tourId-${index}`}{...entry}></Entry>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
