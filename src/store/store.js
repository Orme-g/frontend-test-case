import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartSlice";
import userSlice from "../reducers/userSlice";
import productsSlice from "../reducers/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
        products: productsSlice,
    },
});
