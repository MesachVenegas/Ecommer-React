import Button  from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import React from 'react';

const CardItem = ({product}) => {

    return (
        <Col>
            <Card style={{ width: '20rem' }}>
                <Card.Img
                    variant="top"
                    src={product.images[0].url}
                    style={ { height: '200px', objectFit: 'contain' } }
                />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    <Button as={Link} to={`/products/${product.title}`}> ver mas</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{product.category.name}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardItem;