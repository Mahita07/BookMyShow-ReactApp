import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
function AllMovies() {
  return (
    <div style={{ background: "#181818", color: "whitesmoke" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "/movies/" + mov.id)}
              id={mov.id}
              key={mov.id}
              xs={6}
              md={4}
              lg={3}
            >
              <Card
                style={{
                  width: "250px",
                  background: "#181818",
                  margin: "20px",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "350px", borderRadius: "15px" }}
                  src={mov.image}
                />
                <Card.Body style={{ height: "75px" }}>
                  <Card.Title>{mov.movie}</Card.Title>
                  <Card.Text>{mov.genre}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default AllMovies;
