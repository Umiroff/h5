import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "./likedSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        liked: likedSlice,
        cart: cartSlice
    },
})