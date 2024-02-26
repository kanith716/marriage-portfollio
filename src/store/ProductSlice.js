// ProductSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Error from '../components/Error';

const initialProduct = [
   
];

const productSlice = createSlice({
    name: "productCount",
    initialState: initialProduct,
    reducers: {
        addproduct: (state, action) => {
            const existingProductIndex = state.findIndex(item => item.itemName === action.payload.itemName);
            if (existingProductIndex !== -1) {
                state[existingProductIndex].itemCount += action.payload.itemCount;
            } else {
                state.push(action.payload);
               
            }
        },
        addItem:(state,action) => {
            const currentProductAdd = state.findIndex(item => item.id === action.payload.id);
             if (currentProductAdd !== -1) {
                state[currentProductAdd].itemCount += 1;
                 
            }
        },
        decrementItemCount: (state,action) => {
            const currentProduct = state.findIndex(item => item.id === action.payload.id);
            if (currentProduct !== -1 && state[currentProduct].itemCount > 0) {
                state[currentProduct].itemCount -= 1;
            }
        },
        removeProduct:(state, action) => {
            const removedItemIndex = state.findIndex(item => item.id === action.payload.id);
           
            if (removedItemIndex !== -1){
                state.splice(removedItemIndex, 1);
            }
        }
    }
});
export default productSlice.reducer;
export const { addproduct, addItem, decrementItemCount, removeProduct } = productSlice.actions;

