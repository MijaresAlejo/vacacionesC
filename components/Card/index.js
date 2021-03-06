import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";
import Link from "next/link";

const CardComponent = ({
  name_tour,
  include,
  city,
  image_tour,
  image,
  url,
  price,
  price_from,
  isOffer = false,
  isLanding = false,
}) => {
  let pathName = `${isOffer ? "/ofertas" : "/tours"}/${url}`
  return (
    //Tamaño viste de inicio cards
    <Col xs={12} sm={12} md={isLanding ? 3:12} lg={isLanding ? 3:12} className="mb-4">
      <Card className="h-100">
        <CardImg
          top
          width="100%"
          src={isOffer ? image : image_tour}
          alt="Card image cap"
          style={styles.image}
        />
        <CardBody>
          <CardTitle tag="h5">{name_tour}</CardTitle>
          <CardText style={{ textAlign: "justify" }}>
            {isOffer ? include : city}
          </CardText>
          <Link href={{
            pathname:pathName,
          }}
          >
            <Button color="danger">
              <b>Informacion</b>
            </Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};
const styles = {
  image: {
    height: "200px",
  },
};
export default CardComponent;
