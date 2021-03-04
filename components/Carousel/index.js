import React, { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "/img/banner/home/buceo-en-quintana-roo.webp",
    altText: "Vacaciones en Cancun",
    caption:
      "Ofertas, Hoteles, Paquetes, Promociones, Vacaciones, Viajes, Todo Incluido, Cancún y Playa del Carmen",
  },
  {
    src: "/img/banner/home/vacaciones-de-aventura.jpg",
    altText: "Vacaciones en Cozumel",
    caption:
      "Ofertas, Hoteles, Paquetes, Promociones, Vacaciones, Viajes, Todo Incluido, Cozumel, Tulum y Bacalar",
  },
  {
    src: "/img/banner/home/vacaciones-en-cozumel-full.webp",
    altText: "Vacaciones en Riviera Maya",
    caption:
      "Ofertas, Hoteles, Paquetes, Promociones, Vacaciones, Viajes, Todo Incluido, Riviera Maya, Bacalar y Holbox",
  },
  {
    src: "/img/banner/home/vacaciones-en-hotel.webp",
    altText: "Vacaciones en Tulum",
    caption:
      "Ofertas, Hoteles, Paquetes, Promociones, Vacaciones, Viajes, Todo Incluido, Tulum, Bacalar y Holbox",
  },
];

const CarouselComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: "100%", height: "65vh" }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComponent;
