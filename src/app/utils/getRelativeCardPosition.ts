import { type CardAlbumParamsDto } from "../types/CardAlbumParamsDto";

export const getRelativeCardPosition = (
  currentCardParams: CardAlbumParamsDto,
  previousCardParams?: CardAlbumParamsDto,
) => {
  if (!previousCardParams) {
    return currentCardParams;
  }

  return {
    ...currentCardParams,
    pageTurns:
      (currentCardParams.pageTurns ?? 0) - (previousCardParams.pageTurns ?? 0),
  };
};
