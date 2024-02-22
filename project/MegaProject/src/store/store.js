import { configureStore } from '@reduxjs/toolkit'
import authFeature from './features/authFeature';

const store = configureStore({
    reducer: {
        auth : authFeature
    }
})

export default store;