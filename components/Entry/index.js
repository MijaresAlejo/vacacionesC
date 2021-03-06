import React, { Component } from "react";
import { Card, Row, Col, CardImg } from "reactstrap";
import AvailabilityInput from "../AvailabilityInput";
import HotelAvailability from "../hotelAvailability";
//import HotelAvailability from "../HotelAvailability";

class Entry extends Component {
  render() {
    const {
      entryTitle,
      entryImg,
      price,
      price2,
      access = [],
      isHotel = false,
    } = this.props;

    return (
      <Card className="mb-4">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <CardImg
              src={entryImg}
              className="entry-image-responsive"
              style={{ borderRadius: "25px" }}
            />
          </Col>
          <Col xs={12} md={6} lg={6} className="pt-4">
            <strong>{entryTitle}</strong>
            <ul style={styles.AccessList}>
              {access.map((individualAccess) => (
                <li className="small" key={individualAccess}>
                  {individualAccess}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {isHotel ? <HotelAvailability price={price}/> : <AvailabilityInput price={price} price2={price2}/>}
      </Card>
    );
  }
}
const styles = {
  AccessList: {
    fontSize: "20px",
  },
};

export default Entry;
