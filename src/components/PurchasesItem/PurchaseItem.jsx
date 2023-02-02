import { Button, ListGroup } from "react-bootstrap";
import './purchaseItem.css'

const PurchaseItem = ({ product}) => {

    const formatDate = (date) =>{
        const newDate = date?.split('-')
        console.log(newDate);
        return `${newDate?.[2][0]}${newDate?.[2][1]}/${newDate?.[1]}/${newDate?.[0]}`
    }

    return (
        <ListGroup.Item className='purchase_item'>
            <div className="thumbail_container">
                <img className="thumbail_img" src={product?.images?.[2].url} alt={product?.brand} />
            </div>
            <div className="description">
                <h5>{product?.title}</h5>
                <small>{product?.brand}</small>
                <small>{formatDate(product?.createdAt)}</small>
                <div className="text-danger">${product?.price}</div>
                <div className="div">Qty</div>
                <Button>View</Button>
            </div>
        </ListGroup.Item>
    );
};

export default PurchaseItem;