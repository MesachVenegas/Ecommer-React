import { activeLoading } from './loader.slice';
import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfig';
import axios from 'axios';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state,action) => {
            const purchases = action.payload;
            return purchases;
        }
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(activeLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
        .then((res) => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(activeLoading(false)));
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
