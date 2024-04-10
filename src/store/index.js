import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/slices'
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

