import { configureStore } from "@reduxjs/toolkit";

import { albumSlicereducer } from "./features/album/albumSlice";
import { cardSliceReducer } from "./features/card/cardSlice";
import { searchSliceReducer } from "./features/search/searchSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      album: albumSlicereducer,
      card: cardSliceReducer,
      search: searchSliceReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
