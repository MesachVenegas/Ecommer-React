import { ListGroup, Button } from "react-bootstrap";
import './productCart.css'

const ProductCart = ({item}) => {

    return (
        <ListGroup.Item className='card_item'>
            <div className="cartImg_container">
                <img className="product_img" src={item.product.images[1].url} />
            </div>
            <div className="cart_description">
                <h5>{item.product.title}</h5>
                <span>${item.product.price}</span>
                <div className="item_control">
                    <div className="product_qty">
                        <Button className="btn-cart">-</Button>
                        <span>0</span>
                        <Button className="btn-cart" >+</Button>
                    </div>
                    <Button className="trash">
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export default ProductCart;