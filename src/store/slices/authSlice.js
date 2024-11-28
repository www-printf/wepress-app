import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('access_token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem('access_token', action.payload.token);
        },
        logout: (state, action) => {
            state.token = null;
            localStorage.removeItem('access_token');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
