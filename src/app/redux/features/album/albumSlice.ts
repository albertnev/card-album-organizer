import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { type AlbumSettingsDto } from "@/app/types/AlbumSettingsDto";

export interface AlbumState {
  settings: AlbumSettingsDto;
}

const initialState: AlbumState = {
  settings: {
    cols: 3,
    rows: 3,
  },
};

export const albumSlice = createSlice({
  initialState,
  name: "album",
  reducers: {
    setAlbumCols: (state, { payload }: PayloadAction<number>) => {
      state.settings.cols = payload;
    },
    setAlbumRows: (state, { payload }: PayloadAction<number>) => {
      state.settings.rows = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlbumCols, setAlbumRows } = albumSlice.actions;

export const albumSlicereducer = albumSlice.reducer;
