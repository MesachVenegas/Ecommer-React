import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchases.slice";


const Purchases = () => {
    const historyPurchases = useSelector(state => state.purchases)
    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch(getPurchasesThunk())
    },[])

    console.log(historyPurchases);

    return (
        <div>
            <h1>Compras</h1>
            {
                historyPurchases.map( purchase => (
                    <CardItem />
                ))
            }
        </div>
    );
};

export default Purchases;