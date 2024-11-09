import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('access_token', action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('access_token');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;