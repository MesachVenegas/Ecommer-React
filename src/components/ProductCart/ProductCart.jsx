import { ListGroup, Image } from "react-bootstrap";
import './productCart.css'

const ProductCart = ({item}) => {

    return (
        <ListGroup.Item className='card_item'>
            <div className="cartImg_container">
                <Image className="" src={item.product.images[1].url} fluid/>
            </div>
            <div className="cart_description">
                <h5>{item.product.title}</h5>
                <span>${item.product.price}</span>
                <div className="product_qty">
                    <Button></Button>
                    <span>0</span>
                    <Button></Button>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export default ProductCart;