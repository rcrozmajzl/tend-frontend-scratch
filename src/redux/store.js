import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  enhancers: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
