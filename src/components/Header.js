import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg" style={{fontSize: "20px", fontWeight: "bold"}}>
      <Container>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/button-drop-down">
              <NavItem className="mx-3">ButtonDropDown</NavItem>
            </Link>
            <Link to="/input-drop-down">
              <NavItem className="mx-3">InputDropDown</NavItem>
            </Link>
            <Link to="/table-drop-down">
              <NavItem className="mx-3">TableDropDown</NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
