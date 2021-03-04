import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";

const DescriptionObj = {
  tourTitle: " Hotel Riu Caribe",
  tourDescription: (
    <p style={{ textAlign: "justify" }}>
      El Hotel Riu Caribe (Todo Incluido 24h) se sitúa en la zona hotelera de la
      playa de Cancún, Mexico a la orilla de una playa de aguas turquesas y
      arena fina. Este complejo dispone de todas las instalaciones para que tu
      estancia en él sea perfecta. Encontrarás tres piscinas de agua dulce,
      terraza-solárium, gimnasio, sauna, baño de vapor, jacuzzi y un completo
      centro de wellness para una relajante escapada. El servicio de Todo
      Incluido, te permitirá disfrutar de la gastronomía de México. Tiene una
      gran variedad de recetas y es reconocida por sus sabores distintivos y
      sofisticados con gran condimentación. Por eso en el restaurante buffet así
      como en los restaurantes temáticos del hotel, podrás saborear los mejores
      menús y platos recién preparados. Al estar a la orilla de playa de Cancún,
      el complejo goza de unas maravillosas vistas y de una zona ideal para
      realizar actividades y deportes acuáticos. Si viajas con tu familia,
      pareja o amigos, podrás disfrutar del servicio de Todo Incluido y de
      deportes como tenis, tenis de mesa, voleibol, catamarán, canoas, snorkel y
      mucho más. Por las noches te proponemos que veas los diferentes
      espectáculos y música en vivo. Los niños también disponen de un exclusivo
      programa de entretenimiento RiuLand, donde pueden realizar manualidades y
      actividades con otros niños. Y si te gusta jugar al golf, cerca
      encontrarás un campo con diferentes recorridos y dificultades.
    </p>
  ),
  tourVideo: "https://www.youtube.com/embed/alfJrEj_Acg",
  entries: [
    {
      entryImg: "/img/hoteles/Hotel-RiuCaribe/brazalete.png",
      entryTitle: "Entrada plus",
      access: [
        "Todo Incluido las 24 horas",
        "Al borde de la playa",
        "A 21 km del aeropuerto",
        "WiFi gratuito en todo el hotel",
      ],
      quantity: 5599.6,
    },
  ],
};
export default function RiucancuntHotel() {
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
