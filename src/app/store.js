// 1. IMPORT CONFIGURE STORE FROM RTK IN ORDER TO CONFIGURE OUR STORE
import { configureStore } from '@reduxjs/toolkit';

// 2. IMPORT ALL OF OUR COMBINED REDUCERS
import { combinedCounterReducers } from '../features/counter/counterSlice';

// 3. CONFIGURE RTK STORE FROM ALL THE COMBINED REDUCERS
export const store = configureStore({
  reducer: {
    counter: combinedCounterReducers,
    // todos: todoReducers
  },
});
