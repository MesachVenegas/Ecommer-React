import './pages.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem/CardItem';
import { Breadcrumb, Button, ListGroupItem, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategoryThunk } from '../store/slices/products.slice';

const Product = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [indexImage, setIndexImage] = useState(0);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(0)
    const relatedProducts = useSelector(state => state.products);

    const back = () =>{
        if(product.images.length > 0){
            setIndexImage(indexImage - 1)
        }
    }
    const front = () =>{
        if(indexImage > product.images.length){
            setIndexImage(indexImage + 1)
        }
    }

    const decrement = ()=>{
        if(qty > 1){
            setQty(qty - 1)
        }
    }
    const increment = ()=>{
        setQty( qty + 1)
    }

    useEffect( () =>{
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then( res => {
                setProduct(res.data)
                dispatch(filterByCategoryThunk(res.data.category.id))
            })
            .catch(error => console.log(error))
    },[id])

    return (
        <div className='product_layout'>
            <div className='breadcrumb_container'>
                <Breadcrumb.Item
                    as={ ListGroupItem }
                    onClick={() => navigate('/')}
                >
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    as={ListGroupItem}
                    active
                >
                    {product.brand}
                </Breadcrumb.Item>
            </div>
            <div className="item_container">
                {/* images product */}
                <div className="slider_product">
                    <figure className='img_container'>
                        <span >
                            <i className="fa-solid fa-circle-chevron-left"></i>
                        </span>
                        <img src={product.images?.[indexImage].url} alt="" className='product_img'/>
                        <span onClick={front}>
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </span>
                    </figure>
                    <ul className='images_slider'>
                        {
                            product?.images?.map(imagen =>(
                                <li key={imagen.id} className='product_thumbail'>
                                    <img src={imagen.url} alt='preview_thumbail' />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="description content p-5">
                    <small>{product.brand}</small>
                    <h3>{product.title}</h3>
                    <div className='d-flex flex-column'>
                        <p>
                            {product.description}
                        </p>
                        <div className="d-flex justify-content-around buttons py-4">
                            <div className="d-flex flex-column">
                                <small >Price</small>
                                <span className='price_prod'>${product.price}</span>
                            </div>
                            <div className="d-flex flex-column">
                                <small>Qty</small>
                                <div className="qty_control">
                                    <button className='btn' onClick={decrement}>
                                        -
                                    </button>
                                    <span>{qty}</span>
                                    <button className='btn' onClick={increment}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="buy_btn d-flex justify-content-center p-4">
                            <Button className='d-flex gap-2 align-items-center'>
                                Add to cart
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='related'>
                <h4>Discover related items</h4>
                <div className="related_items">
                    {
                        relatedProducts.map(product => (
                            <CardItem key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;