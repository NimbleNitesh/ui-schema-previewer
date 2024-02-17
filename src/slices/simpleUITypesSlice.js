// simpleUITypesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const simpleUITypesSlice = createSlice({
  name: 'simpleUITypes',
  initialState,
  reducers: {
    // Define reducers for each simple UI type
    inputReducer: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
    },
    selectReducer: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { inputReducer, selectReducer } = simpleUITypesSlice.actions;
export default simpleUITypesSlice.reducer;
