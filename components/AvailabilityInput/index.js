import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
class AvailabilityInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      adults: 1,
      childs: 0,
      totalPrice: this.props.price
    };
    this.toggle = this.toggle.bind(this);
    this.calculate = this.calculate.bind(this);
    this.incrementAdults = this.incrementAdults.bind(this);
    this.decrementAdults = this.decrementAdults.bind(this);
    this.incrementChilds = this.incrementChilds.bind(this);
    this.decrementChilds = this.decrementChilds.bind(this);
  }

  calculate(){
    let totalPrice = 0;
    const { price, price2 } = this.props;
    const { adults, childs} = this.state;
    totalPrice = price*adults + price2 * childs;
    this.setState({totalPrice:totalPrice})
  }
  incrementAdults() {
    this.setState({ adults: this.state.adults + 1 }, this.calculate);
  }
  decrementAdults() {
    this.state.adults > 1
      ? this.setState({ adults: this.state.adults - 1 },this.calculate)
      : false;
  }
  incrementChilds() {
    this.setState({ childs: this.state.childs + 1 }, this.calculate);
  }
  decrementChilds() {
    this.state.childs > 1
      ? this.setState({ childs: this.state.childs - 1 }, this.calculate)
      : false;
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    // adult and child price
    const {totalPrice} = this.state;
    return (
      <>
        <Row className="pl-2 pr-2 pt-2">
          <Col xs={6} md={6} lg={6}>
            <FormGroup>
              <Label for="Date">Fecha</Label>
              <Input
                type="date"
                name="date"
                id="Date"
                placeholder="date placeholder"
              />
            </FormGroup>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <Container>
              <FormGroup>
                <Label for="Guests">Persona(s)</Label>
                <Container style={styles.input} onClick={this.toggle}>
                  {`${this.state.adults} adulto(s)`}
                  {this.state.childs > 0
                    ? `, ${this.state.childs} menores`
                    : ""}
                </Container>
              </FormGroup>
              {this.state.toggle ? (
                <Container className="ToogleTooltip">
                  <Row>
                    <Col xs={4} md={4} lg={4}>
                      <label>Adultos</label>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                      <Row>
                        <Button
                          color="danger"
                          onClick={this.decrementAdults}
                          className="no-radius-1"
                        >
                          -
                        </Button>
                        <div className="tooltip-Number">
                          {this.state.adults}
                        </div>
                        <Button
                          color="success"
                          onClick={this.incrementAdults}
                          className="no-radius-2"
                        >
                          +
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col xs={4} md={4} lg={4}>
                      <label>Menores</label>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                      <Row>
                        <Button
                          color="danger"
                          onClick={this.decrementChilds}
                          className="no-radius-1"
                        >
                          -
                        </Button>
                        <div className="tooltip-Number">
                          {this.state.childs}
                        </div>
                        <Button
                          color="success"
                          onClick={this.incrementChilds}
                          className="no-radius-2"
                        >
                          +
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              ) : (
                ""
              )}
            </Container>
          </Col>
        </Row>
        <Row className="pl-2 pr-2 pb-4">
          <Col xs={12} md={12} lg={12}>
            <Button color="info" className="col-sm-10 offset-sm-1">
              Reservar {totalPrice>0 ? '$'+Number(totalPrice).toFixed(2):''}
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

const styles = {
  input: {
    border: "1px solid #ccc",
    padding: "5px",
  },
};

export default AvailabilityInput;
