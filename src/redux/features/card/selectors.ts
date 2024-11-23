import { type RootState } from "../../store";

export const getCardParameters = (state: RootState) => state.card.current;
export const getPreviousCardParameters = (state: RootState) =>
  state.card.previous;
