import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavigationBar() {

    return (
        <Navbar bg="dark" variant='dark' expand="sm" className="mb-3" sticky="top">
            <Container fluid>
                <Navbar.Brand as={ Link } to='/'>M&K Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                <Navbar.Offcanvas
                    id= "offcanvasNavbar-expand-sm"
                    aria-labelledby="offcanvasNavbarLabel-expand-sm"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                            M&K Shop Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <Nav className="justify-content-end flex-grow-1 pe-4">
                            <Nav.Link as={ Link } to='/loggin'>
                                <i className="fa-solid fa-user"></i> Loggin
                            </Nav.Link>
                            <Nav.Link as={ Link } to='/purchases'>
                                <i className="fa-solid fa-shop"></i> Puncharses
                            </Nav.Link>
                            <Nav.Link>
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;