import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
function AllMovies() {
  return (
    <div style={{ background: "#181818", color: "whitesmoke" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/enna-solla-pogirai-et00319201-08-12-2021-12-02-31.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Enna Solla Pogirai</Card.Title>
                <Card.Text>Comedy/Romantic</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kombu-vatcha-singamda-et00315136-24-09-2021-07-46-41.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Kombu Vatcha Singamda</Card.Title>
                <Card.Text>Action/Drama</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/naai-sekar-et00320969-03-01-2022-06-07-37.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Naai Sekar</Card.Title>
                <Card.Text>Comedy/Drama/Romantic</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/theal-et00319007-04-12-2021-11-42-59.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Theal</Card.Title>
                <Card.Text>Action/Drama</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Pushpa: The Rise - Part 01</Card.Title>
                <Card.Text>Action/Thriller</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/83-et00062705-25-12-2021-02-47-08.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>83</Card.Title>
                <Card.Text>Drama/Sports</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bangarraju-et00316733-10-01-2022-01-52-07.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Bangarraju</Card.Title>
                <Card.Text>Comedy/Fantasy</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card
              style={{ width: "250px", background: "#181818", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "350px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"
              />
              <Card.Body style={{ height: "75px" }}>
                <Card.Title>Spider-Man: No Way Home</Card.Title>
                <Card.Text>Action/Adventure/Sci-fi</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AllMovies;
