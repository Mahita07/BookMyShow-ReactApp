import "./Recmovies.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function Recmovies() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ padding: "15px" }}>Recommended Movies</h2>
      <Carousel>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "space-around",
            }}
          >
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/enna-solla-pogirai-et00319201-08-12-2021-12-02-31.jpg"
              />
              <Card.Body>
                <Card.Title>Enna Solla Pogirai</Card.Title>
                <Card.Text>Comedy/Romantic</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kombu-vatcha-singamda-et00315136-24-09-2021-07-46-41.jpg"
              />
              <Card.Body>
                <Card.Title>Kombu Vatcha Singamda</Card.Title>
                <Card.Text>Action/Drama</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/naai-sekar-et00320969-03-01-2022-06-07-37.jpg"
              />
              <Card.Body>
                <Card.Title>Naai Sekar</Card.Title>
                <Card.Text>Comedy/Drama/Romantic</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/theal-et00319007-04-12-2021-11-42-59.jpg"
              />
              <Card.Body>
                <Card.Title>Theal</Card.Title>
                <Card.Text>Action/Drama</Card.Text>
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
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg"
              />
              <Card.Body>
                <Card.Title>Pushpa: The Rise - Part 01</Card.Title>
                <Card.Text>Action/Thriller</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/83-et00062705-25-12-2021-02-47-08.jpg"
              />
              <Card.Body>
                <Card.Title>83</Card.Title>
                <Card.Text>Drama/Sports</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bangarraju-et00316733-10-01-2022-01-52-07.jpg"
              />
              <Card.Body>
                <Card.Title>Bangarraju</Card.Title>
                <Card.Text>Comedy/Fantasy</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"
              />
              <Card.Body>
                <Card.Title>Spider-Man: No Way Home</Card.Title>
                <Card.Text>Action/Adventure/Sci-fi</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
      <div style={{ marginTop: "30px" }}>
        <img
          style={{ margin: "30px", height: "100px" }}
          alt="streamimg"
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
        />
      </div>
    </div>
  );
}

export default Recmovies;
