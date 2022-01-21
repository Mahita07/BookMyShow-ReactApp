import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function Premiere() {
  return (
    <div style={{ background: "rgb(43, 49, 72)", marginBottom: "30px" }}>
      <h2 style={{ color: "white", padding: "20px" }}>Premieres</h2>
      <Carousel>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "space-around",
            }}
          >
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-et00122526-14-01-2022-11-37-05.jpg"
              />
              <Card.Body
                style={{ background: "rgb(43, 49, 72)", color: "white" }}
              >
                <Card.Title>Dune</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg"
              />
              <Card.Body>
                <Card.Title>Venom: Let There Be Carnage</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-sister--season-1-et00316141-13-01-2022-07-11-13.jpg"
              />
              <Card.Body>
                <Card.Title>The Sister - Season 1</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/kajillionaire-et00301308-15-01-2022-01-57-52.jpg"
              />
              <Card.Body>
                <Card.Title>Kajillionaire</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "space-around",
            }}
          >
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-investigation-et00316067-13-01-2022-07-10-12.jpg"
              />
              <Card.Body>
                <Card.Title>The Investigation</Card.Title>
                <Card.Text>Danish</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/2-hearts-et00320237-13-01-2022-11-57-06.jpg"
              />
              <Card.Body>
                <Card.Title>2 Hearts</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spencer-et00315108-14-01-2022-12-03-18.jpg"
              />
              <Card.Body>
                <Card.Title>Spencer</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "315px",
                background: "rgb(43, 49, 72)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/ghostbusters-afterlife-et00119705-12-01-2022-11-44-56.jpg"
              />
              <Card.Body>
                <Card.Title>Ghostbusters: Afterlife</Card.Title>
                <Card.Text>English</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Premiere;
