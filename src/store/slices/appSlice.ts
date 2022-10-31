import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

import { initialState } from './initialState'

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setViewport(
      state,
      action: PayloadAction<{ value: string }>,
    ) {
      state.viewport = action.payload.value
    },
  },
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
