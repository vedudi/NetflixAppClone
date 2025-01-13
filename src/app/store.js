import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './slices/rootReducer';

export const Store = configureStore({
  reducer: rootReducer,
});
