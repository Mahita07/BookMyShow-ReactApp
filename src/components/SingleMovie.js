import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import data from "./movies.json";
import { useParams } from "react-router-dom";
import "./SingleMovie.css";
function SingleMovie() {
  const { movid } = useParams();
  return (
    <div style={{ background: "#181818", color: "whitesmoke" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => {
            if (mov.id == movid) {
              return (
                <div className="smovie">
                  <div className="smovie-poster">
                    <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3}>
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
                  </div>
                  <div className="smovie-details">
                    <h1 className="smovie-details-name">
                      <b>{mov.movie}</b>
                    </h1>
                    <h4 className="smovie-details-r">
                      Add your review and rating here{" "}
                    </h4>
                    <h6 className="smovie-details-rr">Your ratings matter</h6>
                    <Button
                      className="rbutton"
                      variant="light"
                      style={{
                        background: "whitesmoke",
                        width: "90px",
                        height: "40px",
                        padding: "0px",
                      }}
                    >
                      Rate now
                    </Button>
                    <h6 className="smovie-details-det">{mov.details}</h6>
                    <Button
                      className="bbutton"
                      variant="light"
                      style={{
                        background: "rgb(293, 94, 113)",
                        width: "200px",
                        height: "40px",
                        padding: "0px",
                        color: "whitesmoke",
                        border: "1px solid black",
                      }}
                    >
                      <b>Book Tickets</b>
                    </Button>
                  </div>
                </div>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
}
export default SingleMovie;
