import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';
const BASE_URL = import.meta.env.VITE_API_URL?.replace('/api/v1', '') || 'http://localhost:5000';
const MARKETPLACE_URL = `${BASE_URL}/api/marketplace`;

export const fetchProducts = createAsyncThunk('marketplace/fetchProducts', async () => {
  const response = await axios.get(`${MARKETPLACE_URL}/products`);
  return response.data.products;
});

export const createProduct = createAsyncThunk('marketplace/createProduct', async (productData, { getState }) => {
  const token = getState().auth.token;
  const response = await axios.post(`${MARKETPLACE_URL}/products`, productData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
});

export const createOrder = createAsyncThunk('marketplace/createOrder', async (orderData, { getState }) => {
  const token = getState().auth.token;
  const response = await axios.post(`${MARKETPLACE_URL}/orders`, orderData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
});

export const initiatePayment = createAsyncThunk('marketplace/initiatePayment', async (orderId, { getState }) => {
  const token = getState().auth.token;
  const response = await axios.post(`${MARKETPLACE_URL}/payments/initiate`, { order_id: orderId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
});

export const fetchMyOrders = createAsyncThunk('marketplace/fetchMyOrders', async (_, { getState }) => {
  const token = getState().auth.token;
  const response = await axios.get(`${MARKETPLACE_URL}/my-orders`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.orders;
});

export const deleteProduct = createAsyncThunk('marketplace/deleteProduct', async (productId, { getState }) => {
  const token = getState().auth.token;
  await axios.delete(`${MARKETPLACE_URL}/products/${productId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return productId;
});

const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState: {
    products: [],
    orders: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => { state.loading = true; state.error = null; }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => { state.loading = false; state.error = action.error.message; }
      );
  }
});

export default marketplaceSlice.reducer;
