import React, { Component } from "react";
import { Container, CardGroup } from "reactstrap";
import { getAllPackages, getPopularTours } from "../../services/api";
import CardComponent from "../Card";
// import miImagen from '../../images/miimagen.png'
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  async componentDidMount() {
    const { endpoint } = this.props;
    switch (endpoint) {
      case "bestOffers":
        let bestOffers = await getAllPackages();
        this.setState({ cards: bestOffers });
        break;
      case "popularTours":
        let popularTours = await getPopularTours();
        this.setState({ cards: popularTours });
        break;
    }
    /*
    this.setState({
      cards: [
        {
          id: 1,
          name: "Parque Xcaret",
          url: "/tours/parque-xcaret",
          image: "/img/tours/xcaret.jpg",
        }, // img: miImagen
        {
          id: 2,
          name: "Isla Mujeres",
          url: "/tours/isla-mujeres",
          image: "/img/tours/isla.jpg",
        },
        {
          id: 3,
          name: "Parque Xel-ha",
          url: "/tours/parque-xel-ha",
          image: "/img/tours/xelha.jpg",
        },
        {
          id: 4,
          name: "Xplort Fuego",
          url: "/tours/xplort-fuego",
          image: "/img/tours/xplor.jpg",
        },
        {
          id: 5,
          name: "Tour Xichen",
          url: "/tours/xichen",
          image: "/img/tours/xichen.jpg",
        },
        {
          id: 6,
          name: "Chichén Itzá",
          url: "/tours/chichén Itzá",
          image: "/img/tours/xelha.jpg",
        },
        {
          id: 7,
          name: "Xplort Fuego",
          url: "/tours/xplort-fuego",
          image: "/img/tours/xplor.jpg",
        },
        {
          id: 8,
          name: "Xplort Fuego",
          url: "/tours/xplort-fuego",
          image: "/img/tours/xplor.jpg",
        },
      ], 
      cardsOffers: [
        {
          id: 1,
          tourTitle: "Hotel Xcaret México",
          url: "/ofertas/hotel-xcaret",
          img: "/img/hoteles/Hotel-Xcaret/xcaret1.jpg",
          tourDescription:
            "Estás buscando hoteles en Cancún y la Riviera Maya? Ven a Disfrutar de una Experiencia Inolvidable con toda tu Familia en un Hotel 5 Diamantes.Hotel Todo Incluido .",
        },
        {
          id: 2,
          tourTitle: "Hotel The Reef 28",
          url: "/ofertas/hotel-the-reef-28",
          img: "/img/hoteles/Hotel-Thereef28/reef1.webp",
          tourDescription:
            "La opción perfecta para parejas y grupos que están buscando relajarse. y al mismo tiempo aprovechar de todas las atracciones del centro de Playa del Carmen.",
        },
        {
          id: 3,
          tourTitle: " Hotel Seadust Cancún Family Resort",
          url: "/ofertas/hotel-seadust-cancun-family-resort",
          img: "/img/hoteles/Hotel-Seadust/seadust1.jpg",
          tourDescription:
            "El Seadust Cancun Family Resort es un resort 5 estrellas. Cuenta con zona privada de playa, casino y parque acuático, así como piscina al aire. reserva al mejor precio garantizado.",
        },
        {
          id: 4,
          tourTitle: "Hotel Riu Caribe",
          url: "/ofertas/hotel-riu-caribe",
          img: "/img/hoteles/Hotel-RiuCaribe/riu2.jpg",
          tourDescription:
            "Vive las vacaciones en Cancún con RIU Hotels & Resorts: hoteles de playa, todo incluido, deporte, spa y experiencias únicas con el mejor precio garantizado. ¡Reserva Ahora! Precio Más Bajo!",
        },
      ],
    });
    */
  }
  render() {
    const {
      sectionTitle = "",
      sectionDescription = "",
      isOffer = false,
    } = this.props;
    const { cards } = this.state;
    return (
      <Container className="mt-4">
        <div className="text-center">
          <h2>{sectionTitle}</h2>
          <p>{sectionDescription}</p>
        </div>
        <CardGroup>
          {cards.map((Card) => (
            <CardComponent key={Card.url} isOffer={isOffer} {...Card} />
          ))}
        </CardGroup>
      </Container>
    );
  }
}
export default Section;
