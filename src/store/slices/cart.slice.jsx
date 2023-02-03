import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { activeLoading } from './loader.slice';

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

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
