import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: [],
    isFetching: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        postFormStart: (state) => {
            state.isFetching = true;
        },
        postFormSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
            state.error = false;
        },
        postFormFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { postFormStart, postFormSuccess, postFormFailure } = userSlice.actions;
export default userSlice.reducer;
