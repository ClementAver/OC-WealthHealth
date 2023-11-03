import { configureStore } from "@reduxjs/toolkit";
import employees from "../../features/employees/employees";

export const store = configureStore({
  reducer: {
    employees,
  },
});
