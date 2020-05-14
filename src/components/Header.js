import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <Container fluid style={{ padding: "0" }}>
      <Navbar bg="dark" variant="dark" expand="md">
        <Link to="/" style={{ marginRight: "1rem" }}>
          Tour App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={{ paddingRight: "1rem" }} to="/">
              Home
            </Link>
            <Link to="/member">Member</Link>
          </Nav>
          <Nav inline="true">
            <Link style={{ paddingRight: "1rem" }} to="/profile">
              {(props.user && props.user.name) || "Guest"}
            </Link>
            {!props.user ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/logout">Logout</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
