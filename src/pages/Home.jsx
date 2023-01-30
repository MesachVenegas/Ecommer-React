import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from '../components/CardItem'
import SideBarFilter from '../components/SideBarFilter/SideBarFilter'
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { getProductsThunk, filterByTitleThunk } from "../store/slices/products.slice";

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
        <div className="grid_layout">
            {/* Search bar */}
            <div className="container-sm p-2 search">
                <InputGroup className="mb-3">
                    <Form.Control
                        className="p-3"
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
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>
                </InputGroup>
            </div>
            {/* Filter by Category */}
            <SideBarFilter className="aside" categories={categories}/>
            {/* Listed products availables */}
            <Container className="mt-4 content">
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product =>(
                            <CardItem key={product.id} product={product}/>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;