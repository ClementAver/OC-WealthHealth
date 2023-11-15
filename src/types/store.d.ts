import { store } from "../utils/store/store";

export type RootState = ReturnType<typeof store.getState>;

export interface store {
  employees: [];
}


