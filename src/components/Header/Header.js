import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="./bmslogo.png" alt="bmslogo" className="brand__logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <div className="navdrop">
                <NavDropdown title="Chennai" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Delhi</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Mumbai</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Other</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
            <Button
              href="/user-register"
              variant="outline-light"
              style={{ width: "100px", margin: "10px" }}
            >
              Sign in
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="snav" fluid>
        <Nav className="me-auto snavtext1" bg="light" variant="light">
          <Nav.Link
            onClick={() => (window.location.href = "/" + "movies")}
            style={{ color: "whitesmoke", padding: "10px", fontSize: "1rem" }}
            href="#movies"
          >
            Movies
          </Nav.Link>
          <Nav.Link
            style={{ color: "whitesmoke", padding: "10px", fontSize: "1rem" }}
            href="#stream"
          >
            Stream
          </Nav.Link>
          <Nav.Link
            style={{ color: "whitesmoke", padding: "10px", fontSize: "1rem" }}
            href="#events"
          >
            Events
          </Nav.Link>
          <Nav.Link
            style={{ color: "whitesmoke", padding: "10px", fontSize: "1rem" }}
            href="#sports"
          >
            Sports
          </Nav.Link>
          <Nav.Link
            style={{ color: "whitesmoke", padding: "10px", fontSize: "1rem" }}
            href="#activities"
          >
            Activities
          </Nav.Link>
          <Nav.Link
            style={{ color: "whitesmoke", padding: "10px", fontSize: "1rem" }}
            href="#buzz"
          >
            Buzz
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
