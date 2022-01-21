import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
function AllMoviesFetch() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:5000/movies");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div style={{ background: "#181818", color: "whitesmoke" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "/movie/" + mov._id)}
              id={mov._id}
              key={mov._id}
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default AllMoviesFetch;
