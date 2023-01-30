import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategoryThunk } from '../store/slices/products.slice';

const Product = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const relatedProducts = useSelector(state => state.products);

    useEffect( () =>{
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then( res => {
                setProduct(res.data)
                dispatch(filterByCategoryThunk(res.data.category.id))
            })
            .catch(error => console.log(error))
    },[])

    return (
        <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <h2>{product.title}</h2>
            <div className='d-flex justify-content-center align-items-center p-3'>
                <img src={product.images?.[0].url} alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center p-3'>
                <p>
                    {product.description}
                </p>
            </div>
            <Container className="mt-4">
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {
                        relatedProducts.map(product => (
                            <CardItem key={product.id} product={product} />
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Product;