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
      quantity,
      access = [],
      isHotel = false,
    } = this.props;

    return (
      <Card className="mb-4">
        <Row>
          <Col xs={6} md={6} lg={6}>
            <CardImg
              src={entryImg}
              style={{ height: "200px", borderRadius: "60px" }}
            />
          </Col>
          <Col xs={6} md={6} lg={6} className="pt-4">
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

        {isHotel ? <HotelAvailability /> : <AvailabilityInput />}
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
