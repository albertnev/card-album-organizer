import { type RootState } from "../../store";

export const getSearchCardNumber = (state: RootState) =>
  state.search.cardNumber;
export const getSearchIsLoading = (state: RootState) => state.search.isLoading;
export const getSearchIsRelative = (state: RootState) =>
  state.search.relativeSearch;
export const getSearchSettings = (state: RootState) => state.search;
