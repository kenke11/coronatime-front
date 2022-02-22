import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import statisticReducer from './slices/statistic';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  countries: statisticReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
