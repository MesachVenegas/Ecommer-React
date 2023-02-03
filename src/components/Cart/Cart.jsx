import { useEffect, useState } from 'react';
import { Button, ListGroup, Nav, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItemsThunk } from '../../store/slices/cart.slice';
import ProductCart from '../ProductCart/ProductCart';
import './cart.css'

const Cart = () => {
    const [display, setDisplay] = useState(false);
    const cartShow = () => setDisplay(true);
    const cartClose = () => setDisplay(false);
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch();

    useEffect( () =>{
        if(localStorage.getItem('token')){
            dispatch(getCartItemsThunk())
        }
    },[])

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
                    <ListGroup className='cart_list gap-3'>
                        {
                            cartItems.map( item =>(
                                <ProductCart key={item.id} item={item} />
                            ))
                        }
                    </ListGroup>
                    <div className="checkOut">
                        <Button>Check Out</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;