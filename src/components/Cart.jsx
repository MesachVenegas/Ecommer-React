import { useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';

const Cart = () => {
    const [display, setDisplay] = useState(false);
    const cartShow = () => setDisplay(true);
    const cartClose = () => setDisplay(false);

    return (
        <>
            <Nav.Link onClick={ cartShow }>
                <i className="fa-solid fa-cart-shopping"></i> Cart
            </Nav.Link>

            <Offcanvas show={ display } onHide={ cartClose } placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;