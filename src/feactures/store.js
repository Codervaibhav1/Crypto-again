import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from './slice/cryptoSlice'
const store = configureStore({
    reducer:{
        coins:cryptoReducer

    }
})
export default store