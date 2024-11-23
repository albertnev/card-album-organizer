import { type RootState } from "../../store";

export const getAlbumCols = (state: RootState) => state.album.settings.cols;
export const getAlbumRows = (state: RootState) => state.album.settings.rows;
export const getAlbumSettings = (state: RootState) => state.album.settings;
