import { configureStore } from '@reduxjs/toolkit'
import productsSlice  from './slices/products.slices'

export default configureStore({
    reducer: {
        products: productsSlice
    }
})
