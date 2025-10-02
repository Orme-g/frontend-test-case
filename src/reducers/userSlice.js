import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetch", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const result = await fetch("/user.json");
    if (!result.ok) {
        throw new Error("Error while fetching user!");
    }
    return await result.json();
});

const initialState = {
    status: "idle",
    userData: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                (state.userData = action.payload), (state.status = "success");
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = "error";
            });
    },
});

export const selectUser = (state) => state.user.userData;
export const selectStatus = (state) => state.user.status;

const { reducer } = userSlice;
export default reducer;
