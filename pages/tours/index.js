import Header from "../../components/Header";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
export default function Tours() {
  // Aqui se hace la petición al endpoint para obtener tarjetas y se mandan al section
  const popularTours = {
    sectionTitle: "Tours",
    endpoint: "popularTours",
  };

  return (
    <div>
      <Header />
      <Section {...popularTours} isLanding={true}/>
      <Footer />
    </div>
  );
}
