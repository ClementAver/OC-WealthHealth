import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter/counter";

export const store = configureStore({
  reducer: {
    counter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
