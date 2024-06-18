// @ts-nocheck
import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { Reducer } from '../redux/actions/reducer';
import counterReducer from './slice/counterSlice';

const rootreducer = combineReducers({imglist:Reducer, counter: counterReducer});

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => new Tuple(thunk, logger),
})
export default store;