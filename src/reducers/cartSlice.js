import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }
            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.cartCount = 0;
            state.totalPrice = 0;
        },
    },
});

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = (state) => state.cart.cartCount;
export const selectTotalPrice = (state) => state.cart.totalPrice;

const { actions, reducer } = cartSlice;
export default reducer;
export const { addToCart, removeFromCart, updateQuantity, clearCart } = actions;
