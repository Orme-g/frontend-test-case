import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const selectUser = (state) => state.user.userData;

const { actions, reducer } = userSlice;
export default reducer;
export const { setUser } = actions;
