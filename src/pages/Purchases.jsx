import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import PurchaseItem from '../components/PurchasesItem/PurchaseItem'
import { Breadcrumb, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './pages.css'

const Purchases = () => {
    const historyPurchases = useSelector(state => state.purchases)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () =>{
        dispatch(getPurchasesThunk())
    },[])


    return (
        <div>
            <div className='breadcrumb'>
                <Breadcrumb.Item as={ListGroupItem} onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                <Breadcrumb.Item as={ListGroupItem} onClick={() => navigate('/')}>User Name</Breadcrumb.Item>
                <Breadcrumb.Item as={ListGroupItem} active>Purchases</Breadcrumb.Item>
            </div>
            <ListGroup className="products_container">
                <h2>Historial de Compras</h2>
                {
                    historyPurchases?.map( product => (
                        <PurchaseItem key={product.id} product={product.product} />
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default Purchases;