import { createSlice } from '@reduxjs/toolkit';
import { activeLoading } from './loader.slice';

export const addProductSlice = createSlice({
    name: 'addProduct',
    initialState: {},
    reducers: {
        setAddProduct: (state, action) =>{
            let toAdd = action.payload;
            return toAdd;
        }
    }
})


export const addProductToCartThunk = (data) => (dispatch) => {
    dispatch(activeLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig(), data)
        .then((res) => console.log('Producto Agregado correctamente'))
        .finally(() => dispatch(activeLoading(false)));
}

export const { addProduct } = addProductSlice.actions;

export default addProductSlice.reducer;
