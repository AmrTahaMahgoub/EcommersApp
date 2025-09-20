import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../@types';

type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
  page: number;
};

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess(
      state,
      action: PayloadAction<{ page: number; products: Product[] }>
    ) {
      state.loading = false;
      state.page = action.payload.page;
      // append, not replace
      if (action.payload.page === 1) {
        state.products = action.payload.products;
      } else {
        state.products = [...state.products, ...action.payload.products];
      }
    },
    fetchProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure
} = productSlice.actions;

export default productSlice.reducer;
