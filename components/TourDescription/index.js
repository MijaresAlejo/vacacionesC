import { Container } from "reactstrap";
export default function TourDescription(props) {
  const { tourTitle, tourDescription, tourVideo } = props;
  return (
    <Container>
      <center>
        <h1>{tourTitle}</h1>
      </center>

      <p>{tourDescription}</p>
      <center>
        <iframe
          style={{ width: "100%", height: "500px", borderRadius: "25px" }}
          src={tourVideo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </center>

      {/* slick here */}
    </Container>
  );
}
