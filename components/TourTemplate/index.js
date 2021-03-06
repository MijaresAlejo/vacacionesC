import { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TourDescription from "../../components/TourDescription";
import {formatYmd, formatTourDetails} from "../../services/utils";
import {getTourDetails} from "../../services/api";
import Entry from "../../components/Entry";
import { Container, Row, Col } from "reactstrap";
// Detector de dispositivos

class TourTemplate extends Component{
  state = {
    DescriptionObj : { 
      tourTitle:"",
      tourDescription:"",
      tourVideo: "",
      entries: [
      ],
      gallery: []
    }
  }
  async componentDidMount(){
    const { url } = this.props
    const params = {
      fecha: formatYmd(new Date()),
      adultos:1,
      menores:0,
      url: url,
      lang:"es"
    }
    console.log({params})
    let [tourDetails] = await getTourDetails(params)
    if(tourDetails.activity_info != null){
      this.setState({DescriptionObj: formatTourDetails(tourDetails)})
      console.log(formatTourDetails(tourDetails))

    }
  }
  render(){
    const { isMobile } = this.props;
    let secondColumnSettings = isMobile ? { paddingTop: "4vh" } : { paddingTop: "4vh", maxHeight:"120vh", overflow:'scroll' }
    const {DescriptionObj} = this.state;
    const {entries } = DescriptionObj;
    return (
      <div>
      <Header />
      <Container>
        <Row className="">
          <Col xs={12} sm={12} md={6} className="">
            <TourDescription {...DescriptionObj}></TourDescription>
          </Col>
          <Col xs={12} sm={12} md={6} className="pt-4">
            <Container style={secondColumnSettings}> {/* Agregar al style la variable secondColumnSettings */}
              {entries.map((entry,index) => (
                <Entry key={`tourId-${index}`}{...entry}></Entry>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
    )
  }
}
export default TourTemplate;
