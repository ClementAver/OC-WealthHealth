import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";

import { Provider } from "react-redux";
import { store } from "./utils/store/store";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
