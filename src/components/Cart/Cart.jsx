import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ListGroup, Nav, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartItemsThunk, purchasesItemsThunk } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import ProductCart from '../ProductCart/ProductCart';
import './cart.css'

const Cart = () => {
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const cartShow = () => {
        if (localStorage.getItem('token')) {
            dispatch(getCartItemsThunk())
            setDisplay(true)
        }else{
            navigate('/loggin')
        }
    };
    const cartClose = () => setDisplay(false);
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch();

    const purchaseItems = () =>{
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {}, getConfig())
            .then(() => {
                alert('Artículos Enviados')
                dispatch(getCartItemsThunk())
            })
    }

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
                        <Button onClick={ purchaseItems }>Check Out</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;