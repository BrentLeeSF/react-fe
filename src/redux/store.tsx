// @ts-nocheck
import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import postsSlice from '../redux/slice/postsSlice';
import cartSlice from '../redux/slice/cartSlice';

const rootreducer = combineReducers({
  posts: postsSlice,
  counter: cartSlice
});

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => new Tuple(thunk, logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;