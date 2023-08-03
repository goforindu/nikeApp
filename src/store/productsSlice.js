import {createSlice} from '@reduxjs/toolkit';
import products from '../../assets/data/products.json';

const initialState={
    products:products,
    selectedProduct:null,
}

export const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
       setSelectedProduct:(state,action)=>{
        const productId=action.payload;
        state.selectedProduct=products.find(product=>product.id===productId);
       }
    }
})