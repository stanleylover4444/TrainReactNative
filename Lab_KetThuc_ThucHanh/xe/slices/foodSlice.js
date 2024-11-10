// src/slices/foodSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thực hiện gọi API để lấy danh sách món ăn
export const fetchFoodList = createAsyncThunk(
    'food/fetchFoodList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://6719f367acf9aa94f6a879d7.mockapi.io/api/v1/food/dataFood1');
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data);
            }
            return data; // Dữ liệu trả về là mảng các món ăn
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thực hiện gọi API để thêm món ăn mới
export const addFood = createAsyncThunk(
    'food/addFood',
    async (newFood, { rejectWithValue }) => {
        try {
            const response = await fetch('https://6719f367acf9aa94f6a879d7.mockapi.io/api/v1/food/dataFood1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFood),
            });
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data);
            }
            return data; // Trả về dữ liệu món ăn mới
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foodList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Food List
            .addCase(fetchFoodList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFoodList.fulfilled, (state, action) => {
                state.loading = false;
                state.foodList = action.payload;
            })
            .addCase(fetchFoodList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
            // Add New Food Item
            .addCase(addFood.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addFood.fulfilled, (state, action) => {
                state.loading = false;
                state.foodList.push(action.payload); // Add the new food to the list
            })
            .addCase(addFood.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default foodSlice.reducer;
