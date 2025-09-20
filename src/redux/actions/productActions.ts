import axios from 'axios';
import {AppDispatch} from '../store/configureStore'; 
import {Product} from '../../@types';
import {
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
} from '../reducers/productReducer';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const getProducts =
  (page: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchProductRequest());
      const offset = (page - 1) * limit;
      const response = await axios.get<Product[]>(API_URL, {
        params: {
          limit: limit,
          offset: offset,
        },
      });

      dispatch(fetchProductSuccess({page, products: response.data}));
    } catch (err: any) {
      dispatch(fetchProductFailure(err.message || 'Failed to fetch products'));
    }
  };
