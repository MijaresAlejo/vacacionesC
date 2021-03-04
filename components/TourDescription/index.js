import { Container } from "reactstrap";
import Slider from "../../components/Slider";
import ReadMore from '../SeeMore'
import useDeviceDetect from "../DetectDevice";
export default function TourDescription(props) {
  const { tourTitle, tourDescription, tourVideo, gallery = [] } = props;
  const { isMobile } = useDeviceDetect();
  return (
    <Container className="pt-4">
      <center className="mb-4">
        <h1>{tourTitle}</h1>
      </center>
      {/* Galeria inicia */}
      <Slider fluid={true} adaptiveHeight={true}>
        {gallery.map((image, index) => (
          <img key={index + image} src={image} />
        ))}
      </Slider>
      {/* Galeria termina */}

      {/* Descripcion inicia Validar si es movil*/}
      {isMobile ? (<ReadMore fullText={tourDescription} />) : (
        <Container fluid className="mb-4">
          <p className="mt-4">{tourDescription}</p>
        </Container>
      )}

      {/* Descripcion termina */}

      {/* Video inicia */}
      <center>
        <iframe
          style={{ width: "100%", height: "350px", borderRadius: "25px" }}
          src={tourVideo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </center>
      {/* Video termina */}
    </Container>
  );
}
