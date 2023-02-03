import axios from "axios";
import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartItemsThunk } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import './productCart.css'

const ProductCart = ({item}) => {
    const dispatch = useDispatch();

    const decrease = () =>{
        let loadQuantity = { 'quantity': item?.quantity - 1 }
        // console.log(item);
        axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${item?.id}/`, loadQuantity, getConfig())
        .then(res => dispatch(getCartItemsThunk()))
    }

    const increment = () =>{
        let loadQuantity = { 'quantity': item?.quantity + 1 }
        axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${item?.id}/`, loadQuantity, getConfig())
            .then(res => dispatch(getCartItemsThunk()))
    }

    const deleteItem = () =>{
        axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${item.id}/`, getConfig())
            .then(() => {
                alert('producto eliminado')
                dispatch(getCartItemsThunk())
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <ListGroup.Item className='card_item'>
            <div className="cartImg_container">
                <img className="product_img" src={item.product.images[0].url} />
            </div>
            <div className="cart_description">
                <div className="header_cart">
                    <h5>{item.product.title}</h5>
                    <Button className="trash" onClick={deleteItem}>
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                </div>
                <div className="item_control">
                    <div className="product_qty">
                        <Button className="btn-cart" onClick={decrease} disabled={item.quantity < 2}>-</Button>
                        <span>{item?.quantity}</span>
                        <Button className="btn-cart" onClick={increment}>+</Button>
                    </div>
                </div>
                <span>Total: ${item.product.price}</span>
            </div>
        </ListGroup.Item>
    );
};

export default ProductCart;