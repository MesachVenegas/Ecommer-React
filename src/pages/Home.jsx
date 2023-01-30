import React from "react";
import { useEffect } from "react";
import CardItem from "../components/CardItem";
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Container } from "react-bootstrap";

const Home = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <Container fluid>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {
                    products.map(product =>(
                        <CardItem key={product.id} product={product}/>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Home;