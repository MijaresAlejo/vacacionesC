import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#CACACA",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#CACACA",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const {
      slidesToShow = 1,
      adaptiveHeight = false,
      fluid = true,
    } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      fade: slidesToShow === 1,
      speed: 500,
      adaptiveHeight: adaptiveHeight,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slidesToShow != 1 ? 3 : slidesToShow,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: slidesToShow != 1 ? 2 : slidesToShow,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Container fluid={fluid}>
        <Slider {...settings}>{this.props.children}</Slider>
      </Container>
    );
  }
}
