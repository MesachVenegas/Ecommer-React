import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        active: (state, action)=>{
            let active = action.payload;
            return active;
        }
    }
})

export const { active } = loaderSlice.actions;

export default loaderSlice.reducer;
