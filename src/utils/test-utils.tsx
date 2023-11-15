// import  { PropsWithChildren } from "react";
import React from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { store } from "../utils/store/store";
import type { RootState } from "../types/store";
import employees from "../features/employees/employees";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      employees: [],
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        employees,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
  //   return <Provider store={store}>{children}</Provider>;
  // }
  function Wrapper() {
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
