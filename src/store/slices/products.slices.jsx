import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [
        {
            id: 1,
            name: 'Hp ProBook 6470b',
            isAvailable: true
        }
    ],
    reducers: {

    }
})

export const {  } = productsSlice.actions;

export default productsSlice.reducer;