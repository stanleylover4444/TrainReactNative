// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './slices/foodSlice';

const store = configureStore({
    reducer: {
        food: foodReducer,
    },
});

export default store;
