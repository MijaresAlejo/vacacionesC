import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: "Hotel The Reef 28",
  tourDescription: (
    <p style={{ textAlign: "justify" }}>
      Este resort solo para adultos se encuentra a 1 minuto a pie de las
      tiendas, los bares y las galerías de la Quinta Avenida, a 3 de la playa
      caribeña Mamita y a 55 km del aeropuerto internacional de Cancún.
      <p>
        Las habitaciones son elegantes y cuentan con zona de estar, baño de
        mármol, Wi‑Fi gratis, televisión de pantalla plana, mininevera,
        microondas y cafetera. Las opciones superiores incluyen zona de estar
        independiente con comedor, sofá cama y bañera de hidromasaje en la
        habitación.
      </p>
    </p>
  ),
  tourVideo: "https://www.youtube.com/embed/ywgV4DlwD8Y",
  entries: [
    {
      entryImg: "/img/hoteles/Hotel-Thereef28/reef1.jpg",
      entryTitle: "Entrada plus",
      access: [
        "Desayuno incluido",
        " Estacionamiento gratuito",
        " Piscina cubierta / aire libre",
        "Wi-Fi gratis",
      ],
      price: 5599.6,
    },
  ],
};
export default function ThereefHotel() {
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
                <Entry {...entry} isHotel={true}></Entry>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
