// 1. IMPORT CREATESLICE FROM RTK
import { createSlice } from '@reduxjs/toolkit';

// 2. CREATE YOUR SLICE
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: {
      reducer: (state, action) => {
        console.log(2);
        state.count = state.count + 1;
      },
      prepare: (text) => {
        console.log(1);
        // prepare the payload here before the reducer runs
        return { payload: text };
      },
    },

    decrement(state, action) {
      state.count = state.count - 1;
    },

    reset(state, action) {
      state.count = 0; // immer library
    },

    abracadabraFn(state, action) {
      // Do Something here
    },

    paypalFn(state, action) {
      // Create payment intent
      // Verify intent
    },

    step: {
      reducer: (state, action) => {
        state.count = state.count + action.payload;
      },
      prepare: (text) => {
        const num = parseInt(text);
        return { payload: num };
      },
    },
  },
});

// 3. CREATION OF ACTION CREATORS FROM SLICE
export const { increment, decrement, reset, abracadabraFn, paypalFn, step } =
  counterSlice.actions; // -> "counter/increment" resetActionCreator -> "counter/reset"

// 4. COMBINE ALL REDUCERS
export const combinedCounterReducers = counterSlice.reducer;
