import { configureStore } from "@reduxjs/toolkit";
import counter from "../../features/counter/counter";

export const store = configureStore({
  reducer: {
    counter,
  },
});

