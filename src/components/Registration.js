import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function Registration() {
  const [username, setUsername] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [passwordd, setPasswordd] = useState("");

  function clearInput() {
    setUsername("");
    setemailAddress("");
    setPasswordd("");
  }
  async function UserPost() {
    console.log(username, emailAddress, passwordd);
    const UserDetails = {
      username: username,
      email: emailAddress,
      password: passwordd,
    };
    console.log(UserDetails);
    const response = await axios
      .post("http://localhost:5000/user-register", UserDetails)
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: `<strong>${data.data.Message}</strong>`,
          icon: "success",
          showCloseButton: true,
        });
        clearInput();
      })
      .catch((err) =>
        Swal.fire({
          title: `<strong>${err.message}</strong>`,
          icon: "error",
          showCloseButton: true,
        })
      );
  }

  return (
    <div style={{ color: "whitesmoke", background: "#181818" }}>
      <Container style={{ padding: "7%" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter User name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={emailAddress}
              onChange={(e) => setemailAddress(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="outline-light" type="button" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
