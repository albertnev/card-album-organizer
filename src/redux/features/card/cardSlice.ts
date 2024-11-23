import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { type CardAlbumParamsDto } from "@/types/CardAlbumParamsDto";

export interface CardState {
  current: CardAlbumParamsDto;
  previous?: CardAlbumParamsDto;
}

const initialState: CardState = {
  current: { page: 0, position: 0 },
};

export const cardSlice = createSlice({
  initialState,
  name: "card",
  reducers: {
    setCardResults: (state, { payload }: PayloadAction<CardAlbumParamsDto>) => {
      state.previous = { ...state.current };
      state.current = { ...payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCardResults } = cardSlice.actions;

export const cardSliceReducer = cardSlice.reducer;
