import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    productsList: [],
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = await fetch("/products.json");
    if (!result.ok) {
        throw new Error("Error while fetching products!");
    }
    return await result.json();
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                (state.productsList = action.payload), (state.status = "success");
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "error";
            });
    },
});
export const selectProducts = (state) => state.products.productsList;
export const selectStatus = (state) => state.products.status;

const { reducer } = productSlice;
export default reducer;
