import { setSession } from '../store/slices/loginState.slice';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from './Cart/Cart';

function NavigationBar() {
    const navigate = useNavigate();

    const logout= () =>{
        localStorage.setItem('token', '')
        setSession(false)
        navigate('/loggin')
    }


    return (
        <Navbar bg="light" variant='light' expand="md" className="mb-3" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>M&K Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-sm"
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
                            <Nav.Link as={Link} to='/purchases'>
                                <i className="fa-solid fa-shop"></i> Puncharses
                            </Nav.Link>
                            <Cart />
                            {
                                localStorage.getItem('token') ?
                                <Nav.Link onClick={logout}>
                                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to='/loggin'>
                                    <i className="fa-solid fa-user"></i> Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;