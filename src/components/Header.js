import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      // bg="light"
      expand="lg"
      style={{ fontSize: "20px", fontWeight: "bold",  backgroundColor:"#44277C", padding:"25px" }}
    >
      <Container>
        <a href="https://appnava.com/">
          <Navbar.Brand>
            <svg
              width="42"
              height="42"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="34" height="34" rx="8" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.7992 8.29754L26.8531 16.6674C27.0431 16.8431 27.0497 17.1342 26.8678 17.3176C26.6859 17.5011 26.3845 17.5075 26.1945 17.3318L24.9593 16.19V24.8832C24.9593 25.1794 24.8375 25.4634 24.6206 25.6729C24.4037 25.8823 24.1096 26 23.8029 26H19.7212C19.4582 26 19.245 25.7941 19.245 25.5401V19.956C19.245 19.8166 19.1877 19.6829 19.0856 19.5843C18.9836 19.4858 18.8452 19.4304 18.7008 19.4304H15.2995C15.1551 19.4304 15.0167 19.4858 14.9146 19.5843C14.8126 19.6829 14.7552 19.8166 14.7552 19.956V25.5401C14.7552 25.7941 14.5421 26 14.2791 26H10.1974C9.89072 26 9.59657 25.8823 9.37968 25.6729C9.16281 25.4634 9.04096 25.1794 9.04096 24.8832V16.1897L7.80548 17.3318C7.6155 17.5075 7.31406 17.5011 7.1322 17.3176C6.95034 17.1342 6.95693 16.8431 7.14691 16.6674L16.2013 8.29714C16.4282 8.07364 16.7467 7.99956 17.0023 8C17.257 8.00044 17.5743 8.07517 17.7992 8.29754ZM9.99335 15.3093V24.8832C9.99335 24.9354 10.0148 24.9856 10.0531 25.0225C10.0914 25.0595 10.1433 25.0803 10.1974 25.0803H13.8029V19.956C13.8029 19.5726 13.9605 19.205 14.2412 18.934C14.5219 18.6629 14.9025 18.5107 15.2995 18.5107H18.7008C19.0978 18.5107 19.4784 18.6629 19.7591 18.934C20.0398 19.205 20.1974 19.5726 20.1974 19.956V25.0803H23.8029C23.857 25.0803 23.9089 25.0595 23.9472 25.0225C23.9854 24.9856 24.0069 24.9354 24.0069 24.8832V15.3095L17.1337 8.9556C17.1295 8.95171 17.1254 8.94776 17.1213 8.94373C17.1187 8.9422 17.1122 8.93871 17.1002 8.93464C17.0758 8.9263 17.041 8.91981 17.0006 8.91974C16.9602 8.91967 16.9253 8.92603 16.9007 8.93436C16.8876 8.93878 16.8808 8.94259 16.8783 8.94407C16.8744 8.94798 16.8704 8.95182 16.8663 8.9556L9.99335 15.3093Z"
                fill="black"
              />
            </svg>
          </Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/button-drop-down" className="text-decoration-none text-white">
              <NavItem className="mx-3 text-decoration-none">List Button</NavItem>
            </Link>
            <Link to="/input-drop-down" className="text-decoration-none text-white">
              <NavItem className="mx-3">Input Dropdown</NavItem>
            </Link>
            <Link to="/table-drop-down" className="text-decoration-none text-white" >
              <NavItem className="mx-3">Table Button</NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
