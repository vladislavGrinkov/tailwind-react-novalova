// Core
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

// Instrument
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    })
      .concat(logger),
});


export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TypeAppDispatch>();

export default store;
