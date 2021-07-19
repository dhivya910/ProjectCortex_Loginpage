import React, { useState } from 'react';

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.counter = action.payload;
    },
    logout: (state) => {
      state.counter = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;

export const selectUser = (state) => state.counter.counter;

export default counterSlice.reducer;
