import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: " Hotel Seadust Cancún Family Resort",
  tourDescription: (
    <p style={{ textAlign: "justify" }}>
      Este lujoso resort de playa con todo incluido se encuentra a 13 minutos a
      pie del Museo Maya de Cancún y a 9 km del parque acuático Wet'n Wild
      Cancún. Las habitaciones, modernas y refinadas, tienen una decoración
      tropical, ventiladores en el techo, televisiones de pantalla plana y
      balcones con vistas al mar. Las habitaciones superiores también incluyen
      bañeras de hidromasaje para 2 personas, cafeteras y cestas de frutas,
      mientras que las suites cuentan con jacuzzis. Por su parte, las
      habitaciones familiares tienen literas y camas corredizas. Servicio de
      habitaciones disponible.
    </p>
  ),
  tourVideo: "https://www.youtube.com/embed/xSAsz69nIsw",
  entries: [
    {
      entryImg: "/img/hoteles/Hotel-Seadust/brazalete.jpg",
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
export default function SeadustHotel() {
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
