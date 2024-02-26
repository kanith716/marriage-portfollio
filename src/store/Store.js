import { configureStore } from "@reduxjs/toolkit";
import ProductReducer    from "./ProductSlice";
import WishListReducers from "./WishlistSlice";

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        wishlist: WishListReducers
    }
})