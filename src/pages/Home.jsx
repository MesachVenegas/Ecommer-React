import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from '../components/CardItem'
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { getProductsThunk, filterByCategoryThunk, filterByTitleThunk } from "../store/slices/products.slice";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const [searchTitle, setSearchTitle] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <Container className="align-items-center" fluid>
            {/* Search bar */}
            <Container className="p-2">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Name or Id"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={ searchTitle }
                        onChange={ e => setSearchTitle(e.target.value)}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={ () => dispatch(filterByTitleThunk(searchTitle)) }
                    >
                        Search
                    </Button>
                </InputGroup>
            </Container>
            {/* Filter by Category */}
            <Container>
                <ul className="categories list-group">
                    <li
                        className="list-group-item"
                        onClick={ () => dispatch(getProductsThunk()) }
                        style={{ cursor: 'pointer'}}
                    >
                        All
                    </li>
                    {
                        categories.map( category => (
                            <li
                                className="list-group-item"
                                key={category.id}
                                onClick={ () => dispatch(filterByCategoryThunk(category.id))}
                                style={{ cursor: 'pointer' }}
                            >
                                {category.name}
                            </li>
                        ))
                    }
                </ul>
            </Container>
            {/* Listed products availables */}
            <Container className="mt-4">
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product =>(
                            <CardItem key={product.id} product={product}/>
                        ))
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Home;