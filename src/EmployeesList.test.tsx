import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Given I am an user.", () => {
  beforeEach(async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        employees: [
          { firstName: "Clément", lastName: "Aver", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "development" },
          { firstName: "Agathe", lastName: "Brütt", birthDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", startDate: "Fri Nov 03 2023 14:29:54 GMT+0100 (heure normale d’Europe centrale)", street: "5 rue Simone Boudet", city: "Toulouse", state: "FR", zipCode: "31200", department: "graphic design" },
        ],
      },
    });
    const employeesListBtn = screen.queryByText(/View Current Employees/i);
    await userEvent.click(employeesListBtn as HTMLElement);
  });

  describe("When I arrive on the page containing the employees table.", () => {
    test("Then I should be able to see the main title.", () => {
      const h1 = screen.getByText("Current Employees");
      expect(h1).toBeInTheDocument();
    });

    test("Then I should be able to see the employees table.", () => {
      const table = document.getElementsByTagName("table");
      expect(table[0]).toBeInTheDocument();
    });

    test("Then the table should have one row per employee.", () => {
      const tbody = document.getElementsByTagName("tbody")[0];
      expect(tbody.childElementCount.valueOf()).toBe(2);
    });

    test("Then employees must appear in the order in which they were added to the state.", () => {
      const tbody = document.getElementsByTagName("tbody")[0];
      const firstEmployee = tbody.firstChild?.firstChild?.textContent;
      const secondEmployee = tbody.children[1]?.firstChild?.textContent;

      expect(firstEmployee).toBe("Clément");
      expect(secondEmployee).toBe("Agathe");
    });

    describe("When I sort the employees in ascending first-name order.", () => {
      test("Then 'Agathe' should be before 'Clément'.", async () => {
        const sortingBtn = screen.queryByTestId("sorting-btn");
        await userEvent.click(sortingBtn as HTMLButtonElement);

        const tbody = document.getElementsByTagName("tbody")[0];
        const firstEmployee = tbody.firstChild?.firstChild?.textContent;
        const secondEmployee = tbody.children[1]?.firstChild?.textContent;

        expect(firstEmployee).toBe("Agathe");
        expect(secondEmployee).toBe("Clément");
      });
    });

    describe("When I search only for employees named 'Agathe'.", () => {
      test("Then only one employee must be displayed, whose first name should be 'Agathe'.", async () => {
        const searchInput = screen.getByPlaceholderText("John");
        await userEvent.click(searchInput);
        await userEvent.keyboard("Agathe");
        await userEvent.keyboard("{Enter}");

        const tbody = document.getElementsByTagName("tbody")[0];
        const firstEmployee = tbody.firstChild?.firstChild?.textContent;

        expect(tbody.childElementCount.valueOf()).toBe(1);
        expect(firstEmployee).toBe("Agathe");
      });
    });
  });
});

describe("Given I am an user.", () => {
  beforeEach(async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        employees: [
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
        ],
      },
    });
    const employeesListBtn = screen.queryByText(/View Current Employees/i);
    await userEvent.click(employeesListBtn as HTMLElement);
  });

  test("Then i can browse the pages in the table.", async () => {
    const nextPageBtn = screen.queryByTestId("next-page-btn");
    await userEvent.click(nextPageBtn as HTMLButtonElement);
    const tbody = document.getElementsByTagName("tbody")[0];
    expect(tbody.childElementCount.valueOf()).toBe(2);
  });

  describe("When I change the number of entries displayed from 10 to 25.", () => {
    test("Then the number of entries displayed must equal 12.", async () => {
      const selectCustomOptions = document.getElementsByClassName("selectCustom-option");
      const twentyFive = selectCustomOptions[1];
      await userEvent.click(twentyFive as HTMLButtonElement);
      const tbody = document.getElementsByTagName("tbody")[0];
      expect(tbody.childElementCount.valueOf()).toBe(12);
    });
  });
});
