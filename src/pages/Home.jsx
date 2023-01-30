import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row'
import CardItem from "../components/CardItem";
import  Container  from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk, filterByCategoryThunk } from "../store/slices/products.slice";
import axios from "axios";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <Container fluid>
            <ul className="categories">
                <li onClick={ () => dispatch(getProductsThunk()) }>
                    <a href="#">All</a>
                </li>
                {
                    categories.map( category => (
                        <li key={category.id} onClick={ () => dispatch(filterByCategoryThunk(category.id))}>
                            <a href="#">{category.name}</a>
                        </li>
                    ))
                }
            </ul>
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