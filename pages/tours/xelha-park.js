import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: "Parque Xel-há",
  tourDescription:
    "Cerca de Tulum encontrarás Xel-Há, un lugar para fluir con la naturaleza Ponte tu equipo para hacer snorkel entre los habitantes marinos de la caleta o atrévete a deslizarte en los toboganes del Faro Mirador, a caminar por juegos de cuerdas y a caer desde tirolesas hacia refrescantes aguas Xel-Há, el lugar donde nace el agua, te espera.Ya que es el parque ecológico ubicado en el estado de Quintana Roo, México. Se caracteriza por la caleta en la que el agua subterránea de la península de Yucatán se integra al Mar Caribe, conformando un espacio para la convivencia de diversas especies marinas y de agua dulce.",
  tourVideo: "https://www.youtube.com/embed/j8J955sjsOQ",
  entries: [
    {
      entryImg: "/img/tours/xel-ha/brazalete.jpg",
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
      entryImg: "/img/tours/xel-ha/brazalete.jpg",
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
      entryImg: "/img/tours/xel-ha/brazalete.jpg",
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
      entryImg: "/img/tours/xel-ha/brazalete.jpg",
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
      entryImg: "/img/tours/xel-ha/brazalete.jpg",
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
      entryImg: "/img/tours/xel-ha/brazalete.jpg",
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
export default function XelhaPark() {
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
