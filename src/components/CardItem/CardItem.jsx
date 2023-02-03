import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProductToCartThunk } from '../../store/slices/cart.slice';
import { useState } from 'react';
import './cardItem.css'

const CardItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        'quantity': 1,
        'productId': product.id
    });

    return (
        <>
            <Card className='product_card'>
                <Card.Img
                    variant="top"
                    src={product.images[0].url}
                    style={{ height: '200px', objectFit: 'contain', cursor: 'pointer' }}
                    onClick={() => navigate(`/products/${product.id}`)}
                />
                <Container className='mt-2' fluid>
                    <small className="text-muted">{product.brand}</small>
                </Container>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <small className="text-muted">Price</small>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        ${product.price}
                        <Button onClick={() => dispatch(addProductToCartThunk(data))}>
                            <i className="fa-solid fa-cart-plus"></i>
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default CardItem;