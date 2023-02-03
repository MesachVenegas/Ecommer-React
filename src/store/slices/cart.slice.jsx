import { createSlice } from '@reduxjs/toolkit';
import { activeLoading } from './loader.slice';
import getConfig from '../../utils/getConfig';
import axios from 'axios';

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {
        setCartItems: (state, action) =>{
            let items = action.payload;
            return items;
        }
    }
})

export const getCartItemsThunk = () => (dispatch) => {
    dispatch(activeLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setCartItems(res.data)))
        .finally(() => dispatch(activeLoading(false)));
}

export const addProductToCartThunk = (data) => (dispatch) => {
    console.log(data)
    dispatch(activeLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart/', data, getConfig())
        .then((res) => alert('Producto Agregado correctamente'))
        .catch(error => {
            alert('Hubo un error')
            console.log(error)
        })
        .finally(() => dispatch(activeLoading(false)));
}

export const deleteProductThunk = (id) => (dispatch) => {
    dispatch(activeLoading(true));
    return axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}/`, getConfig())
        .then(() => {
            alert('producto eliminado')
            getCartItemsThunk()
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() => dispatch(activeLoading(false)));
}

export const editProductThunk = (id, qty) => (dispatch) => {
    dispatch(activeLoading(true));
    return axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}/`, qty, getConfig())
        .then(() => console.log('producto actualizado'))
        .catch(error => {
            if(error.response.status == 404){
                alert('No se encontró el producto')
            }else{
                console.error(error.response)
            }
        })
        .finally(() => dispatch(activeLoading(false)));
}


export const purchasesItemsThunk = () => (dispatch) => {
    dispatch(activeLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(alert('Artículos Enviados')))
        .finally(() => {
            dispatch(activeLoading(false))
            dispatch(setCartItems([]))
        });
}

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
