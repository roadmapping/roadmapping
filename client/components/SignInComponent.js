import React from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function SignInComponent() {
  return (
    <Container>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: "25rem" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ width: "25rem" }}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/appdragdropdemo">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Link>{" "}
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
