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
  name,
  include,
  city,
  img,
  image,
  url,
  isOffer = false,
}) => {
  return (
    <Col xs={12} sm={12} md={isOffer ? 12:6} lg={isOffer ? 12:3} className="mb-4">
      <Card className="h-100">
        <CardImg
          top
          width="100%"
          src={isOffer ? image: img}
          alt="Card image cap"
          style={styles.image}
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
            <CardText style={{ textAlign: "justify" }}>
              {isOffer? include: city}
            </CardText>
          <Link href={`${isOffer ? '/ofertas':'/tours'}/${url}`}>
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
