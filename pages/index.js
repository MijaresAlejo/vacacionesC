import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  // Aqui se hace la petición al endpoint para obtener tarjetas y se mandan al section
  const bestOffers = {
    sectionTitle: "Mejores ofertas del día",
    sectionDescription: "Reserva tu habitación con los mejores descuentos",
    isOffer: true,
    endpoint: "bestOffers",
  };
  const popularTours = {
    sectionTitle: "Tours más populares",
    endpoint: "popularTours",
  };

  return (
    <div>
      <Header />
      <Carousel />
      <Section {...popularTours} />
      <Section {...bestOffers} />
      <Footer />
    </div>
  );
}
