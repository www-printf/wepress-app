import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uploadReducer from './slices/uploadSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        upload: uploadReducer,
    },
});