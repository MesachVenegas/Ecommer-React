import Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { Container } from 'react-bootstrap';

const CardItem = ({product}) => {
    const navigate = useNavigate()

    return (
        <Col>
            <Card style={{width: '20rem',cursor: 'pointer'}} onClick={() => navigate(`/products/${product.id}`)}>
                <Card.Img
                    variant="top"
                    src={product.images[0].url}
                    style={ { height: '200px', objectFit: 'contain' } }
                />
                <Container className='mt-2' fluid>
                    <small className="text-muted">{product.brand}</small>
                </Container>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <small className="text-muted">Price</small>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        ${product.price}
                        <Button className='rounded-circle'>
                            Buy
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardItem;