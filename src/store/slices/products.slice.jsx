import { createSlice } from '@reduxjs/toolkit';
import { activeLoading } from './loader.slice';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload;
            return products;
        }

    }
})

export const getProductsThunk = () => dispatch => {
    dispatch(activeLoading(true));
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(activeLoading(false)));
}

export const filterByCategoryThunk = (id) => dispatch => {
    dispatch(activeLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(activeLoading(false)));
}

export const filterByTitleThunk = (name) => dispatch => {
    dispatch(activeLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${name}`)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(activeLoading(false)));
}

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;