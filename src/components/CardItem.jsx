import Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';

const CardItem = ({product}) => {
    const navigate = useNavigate()

    return (
        <Col>
            <Card
                style={
                    {
                        width: '20rem',
                        cursor: 'pointer'
                    }
                }
                onClick={() => navigate(`/products/${product.id}`)}
            >
                <Card.Img
                    variant="top"
                    src={product.images[0].url}
                    style={ { height: '200px', objectFit: 'contain' } }
                />
                <Card.Footer>
                    <small className="text-muted">{product.category.name}</small>
                </Card.Footer>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    <Button>Buy</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardItem;