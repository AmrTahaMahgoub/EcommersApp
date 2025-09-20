import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import ProductReducer from './productReducer';
import cartReducer from './cartReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: 'redux-root',
  whitelist: [],
};

const ProductsPersistConfig = {
  key: 'Product',
  storage: AsyncStorage,
  keyPrefix: 'redux-Product',
  whitelist: ['Product'],
};
const CartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  keyPrefix: 'redux-Product',
  whitelist: ['cart'],
};
const rootReducers = combineReducers({
  productReducer: persistReducer(ProductsPersistConfig, ProductReducer),
  cartReducer:persistReducer(CartPersistConfig, cartReducer),
});

export {rootPersistConfig, rootReducers};
