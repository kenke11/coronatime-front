import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/slices/auth';
import messageReducer from 'store/slices/message';
import statisticReducer from 'store/slices/statistic';

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
