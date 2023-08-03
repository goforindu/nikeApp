import {configureStore} from '@reduxjs/toolkit';
import {productsSlice} from '../store/productsSlice';

export const store=configureStore({
    reducer:{
        products:productsSlice.reducer
    }
});