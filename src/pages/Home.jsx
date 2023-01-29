import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default Home;