import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProductThunk, editProductThunk } from "../../store/slices/cart.slice";
import './productCart.css'

const ProductCart = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    const decrease = () =>{
        let loadQuantity = {'quantity': quantity}
        if(quantity > 1){
            setQuantity(quantity - 1)
            dispatch(editProductThunk(item.productId, loadQuantity))
        }else{
            if(confirm('Do you wanna delete item?')){
                dispatch( deleteProductThunk(item.productId))
            }
        }
    }

    const increment = () =>{
        let loadQuantity = { 'quantity': quantity }
        setQuantity( quantity + 1)
        dispatch(editProductThunk(item.productId, loadQuantity))
    }

    return (
        <ListGroup.Item className='card_item'>
            <div className="cartImg_container">
                <img className="product_img" src={item.product.images[0].url} />
            </div>
            <div className="cart_description">
                <div className="header_cart">
                    <h5>{item.product.title}</h5>
                    <Button className="trash" onClick={() => dispatch(deleteProductThunk(item.productId))}>
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                </div>
                <div className="item_control">
                    <div className="product_qty">
                        <Button className="btn-cart" onClick={decrease}>-</Button>
                        <span>{quantity}</span>
                        <Button className="btn-cart" onClick={increment}>+</Button>
                    </div>
                </div>
                <span>Total: ${item.product.price}</span>
            </div>
        </ListGroup.Item>
    );
};

export default ProductCart;