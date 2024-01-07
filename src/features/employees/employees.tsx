import { createSlice } from "@reduxjs/toolkit";

const initialState: object[] = [
  { firstName: "André", lastName: "Nogues", birthDate: "Fri Nov 03 2023 01:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Alain ", lastName: "Puig", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Anne", lastName: "Lopez", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Baptiste", lastName: "Vidal", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Basile", lastName: "Fabre", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Bastien", lastName: "Pages", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Clément", lastName: "Carrere", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Corentin", lastName: "Coll", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Charlie", lastName: "Roig", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Daniel", lastName: "Parent", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "David", lastName: "Esteve", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Dominique", lastName: "Colomer", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Elisabeth", lastName: "Tixador", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Elisa", lastName: "Prats", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Elian", lastName: "Fourcade", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Florian", lastName: "Cadene", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Francis", lastName: "Navarro", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Frédéric", lastName: "Raynal", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Gabriel", lastName: "Figueres", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Gaspard", lastName: "Doutres", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Gabin", lastName: "Rodriguez", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Hugo", lastName: "Pons", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Henri", lastName: "Serra", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Hector", lastName: "Gonzalez", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Isabelle", lastName: "Vila", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Inès", lastName: "Blanc", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Ismaël", lastName: "Cargol", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Ilyès", lastName: "Ruiz", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Jean", lastName: "Billes", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
  { firstName: "Joseph", lastName: "Henric", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
  { firstName: "Jules", lastName: "Bonafos", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
];

export const employees = createSlice({
  name: "employees",
  initialState,
  reducers: {
    add: (state, action) => {
      for (const key in action.payload) {
        // If other than a string is passed, it is converted into one (used here for datepickers).
        if (typeof action.payload[key] !== "string") action.payload[key] = action.payload[key].toString();
      }
      state.push(action.payload);
    },
  },
});

export default employees.reducer;

export const { add } = employees.actions;
