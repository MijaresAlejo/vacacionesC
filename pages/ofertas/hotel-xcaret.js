import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: "Hotel Xcaret",
  tourDescription: (
    <p style={{ textAlign: "justify" }}>
      Entre la mística selva maya y el mar Caribe, se encuentra Hotel Xcaret
      México, un nuevo destino inspirado en la calidez de la hospitalidad
      mexicana, lleno de tradición y modernidad en cada uno de sus detalles
      Diseñado con una arquitectura eco integradora, desde cada una de las 900
      suites, podrás admirar únicos espacios naturales como ríos, caletas,
      playones y playas de blanca arena dedicados al descanso y la diversión
      Vivir y disfrutar lo mejor de México nunca fue tan fácil como en Hotel
      Xcaret México, donde tienes acceso ilimitado a los parques y tours de
      Xcaret: Xcaret, Xel-Há, Xplor, Xplor Fuego, Xoximilco, Xenses, Xenotes y
      Xichén, con transportación incluida y el plan de alimentos que cada
      atracción ofrece Además de transportación aeropuerto-hotel-aeropuerto
      Además, cuentas con el acceso ilimitado 18 restaurantes y bares, 3
      restaurantes y 2 bares solo para adultos Kids & Teens club Actividades
      acuáticas no motorizadas como kayak, stand up paddle, snorkeling Canchas
      de tenis y paddle 11 piscinas 3 gimnasios y un circuito de entrenamiento
      funcional en la naturaleza Muluk Spa & Wellness Espacios para eventos y
      celebraciones y una iglesia .
    </p>
  ),
  tourVideo: "https://www.youtube.com/embed/xOfprbhis8I",
  entries: [
    {
      entryImg: "/img/hoteles/Hotel-Xcaret/brazalete.png",
      entryTitle: "Entrada Xcaret plus",
      access: ["5 Diamantes", "Show Nocturno de Xcaret"],
      quantity: 5599.6,
    },
  ],
};
export default function XcaretHotel() {
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
