import { configureStore } from '@reduxjs/toolkit';
import posts from './posts/slice';
import user from './user/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    posts,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
