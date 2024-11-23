import { type PageSides } from "../constants/pageSides";

export interface CardAlbumParamsDto {
  page: number;
  pageTurns?: number;
  position: number;
  side?: PageSides;
}
