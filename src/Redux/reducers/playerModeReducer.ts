import { gridStateMode } from './../../Types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initalState: number = 2

export const playerModeSlice = createSlice({
  name: "playerMode",
  initialState: initalState,
  reducers: {
    setPlayerMode: (state, action: PayloadAction<number>) => {
      return action.payload
    }
  }
})

export default playerModeSlice.reducer