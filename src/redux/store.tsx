// @ts-nocheck
import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { ProductsReducer } from '../redux/reducers/productsReducer';
import counterReducer from './slice/counterSlice';

const rootreducer = combineReducers({
  productsList: ProductsReducer,
  counter: counterReducer
});

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => new Tuple(thunk, logger),
})
export default store;