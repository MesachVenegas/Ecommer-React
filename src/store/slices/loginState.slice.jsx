import { createSlice } from '@reduxjs/toolkit';

export const loginStateSlice = createSlice({
    name: 'loginState',
    initialState: false,
    reducers: {
        setSession: (state, action) =>{
            let status = action.payload;
            return status;
        }
    }
})

export const { setSession } = loginStateSlice.actions;

export default loginStateSlice.reducer;
