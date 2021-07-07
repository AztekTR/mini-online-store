import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form'
import productReducer from '../reducers/productSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    products: productReducer,
  },
});
