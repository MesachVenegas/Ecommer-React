import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
import loaderSlice from './slices/loader.slice'
import loginStateSlice from './slices/loginState.slice'
import productsSlice  from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
        products: productsSlice,
        isLoading: loaderSlice,
        loginState: loginStateSlice,
        purchases: purchasesSlice,
        cartItems: cartSlice,
    }
})
