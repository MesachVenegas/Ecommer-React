import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts : (state, action) =>{
            let newProducts = action.payload;
            return newProducts;
        }

    }
})

export const { setProducts  } = productsSlice.actions;

export default productsSlice.reducer;