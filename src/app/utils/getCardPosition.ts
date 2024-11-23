import { pageSides } from "../constants/pageSides";
import { type CardAlbumParamsDto } from "../types/CardAlbumParamsDto";

export const getCardPosition = (
  cardNumber: number,
  cardsPerPage = 9,
): CardAlbumParamsDto => {
  // If cardNumber or cardsPerPage are not valid, return empty result
  if (
    !cardNumber ||
    !cardsPerPage ||
    isNaN(cardNumber) ||
    isNaN(cardsPerPage)
  ) {
    //
    return { page: 0, position: 0 };
  }

  const sides: CardAlbumParamsDto["side"][] = [pageSides.left, pageSides.right];

  // If % is 0, means the page is completed = card goes on last position
  const data: CardAlbumParamsDto = {
    page: Math.ceil(cardNumber / cardsPerPage),
    position: cardNumber % cardsPerPage || cardsPerPage,
  };

  data.pageTurns = Math.floor(data.page / 2);
  data.side = sides[data.page % 2];

  return data;
};
