import { createSlice } from "@reduxjs/toolkit";

const initialState: object[] = [
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
];

export const employees = createSlice({
  name: "employees",
  initialState,
  reducers: {
    add: (state, action) => {
      for (const key in action.payload) {
        if (typeof action.payload[key] !== "string") action.payload[key] = action.payload[key].toString();
      }
      state.push(action.payload);
    },
  },
});

export default employees.reducer;

export const { add } = employees.actions;
