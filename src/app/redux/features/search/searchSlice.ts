import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  cardNumber: number;
  isLoading: boolean;
  relativeSearch: boolean;
}

const initialState: SearchState = {
  cardNumber: 0,
  isLoading: false,
  relativeSearch: true,
};

export const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    setSearchCardNumber: (state, { payload }: PayloadAction<number>) => {
      state.cardNumber = payload;
    },
    setSearchIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setSearchIsRelative: (state, { payload }: PayloadAction<boolean>) => {
      state.relativeSearch = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchCardNumber, setSearchIsLoading, setSearchIsRelative } =
  searchSlice.actions;

export const searchSliceReducer = searchSlice.reducer;
