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
  tourTitle,
  tourDescription,
  img,
  url,
  isOffer = false,
}) => {
  return (
    <Col xs={12} sm={12} md={6} lg={3} className="mb-4">
      <Card className="h-100">
        <CardImg
          top
          width="100%"
          src={img}
          alt="Card image cap"
          style={styles.image}
        />
        <CardBody>
          <CardTitle tag="h5">{tourTitle}</CardTitle>
          {isOffer ? (
            <CardText style={{ textAlign: "justify" }}>
              {tourDescription}
            </CardText>
          ) : (
            ""
          )}
          <Link href={url}>
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
