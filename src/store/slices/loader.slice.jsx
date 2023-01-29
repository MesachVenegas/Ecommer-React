import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        activeLoading: (state, action)=>{
            let active = action.payload;
            return active;
        }
    }
})

export const { activeLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
