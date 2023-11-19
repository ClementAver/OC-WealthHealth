import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Given I am an user.", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  describe("When I arrive on the application.", () => {
    test("Then I should be able to see the logo.", () => {
      const logo = screen.getByTestId("logo");
      expect(logo).toBeInTheDocument();
    });
    test("Then I should be able to see the main title.", () => {
      const h1 = screen.getByText("Create Employee");
      expect(h1).toBeInTheDocument();
    });

    test("Then I should be able to see the form used to register a new employee.", () => {
      const form = screen.getByTestId("create-employee-form");
      expect(form).toBeInTheDocument();
    });

    describe("When I enter a first name in the corresponding input.", () => {
      beforeEach(async () => {
        const firstNameInput = screen.getByPlaceholderText("John");
        await userEvent.click(firstNameInput);
      });

      describe("When the data entered does not correspond to the input's expectations on submit.", () => {
        test("Then I should be warned.", async () => {
          await userEvent.keyboard("{Enter}");
          const firsNameInputContainer = document.getElementsByClassName("form__item");
          // The input is empty, therefore the warning message should be added to the DOM on submission.
          expect(firsNameInputContainer[0].childNodes.length).toBe(3);
        });
      });

      describe("When the data entered correspond to the input's expectations on submit.", () => {
        test("Then the warning message shouldn't be displayed.", async () => {
          await userEvent.keyboard("John");
          await userEvent.keyboard("{Enter}");
          const firsNameInputContainer = document.getElementsByClassName("form__item");
          /*
          The input isn't empty and contains no more than 64 characters,
          therefore the warning message should not be added into the DOM on submission.
        */
          expect(firsNameInputContainer[0].childNodes.length).toBe(2);
        });
      });
    });

    describe("When I submit a valid form", () => {
      test("Then I should be informed that an employee has successfully been created.", async () => {
        const firstNameInput = screen.getByPlaceholderText("John");
        await userEvent.click(firstNameInput);
        await userEvent.keyboard("John");
        await userEvent.keyboard("{Enter}");

        const lastNameInput = screen.getByPlaceholderText("Doe");
        await userEvent.click(lastNameInput);
        await userEvent.keyboard("Doe");
        await userEvent.keyboard("{Enter}");

        const streetInput = screen.getByPlaceholderText("Vonnie Brown 1515 Applewood Road Baton");
        await userEvent.click(streetInput);
        await userEvent.keyboard("Vonnie Brown 1515 Applewood Road Baton");
        await userEvent.keyboard("{Enter}");

        const cityInput = screen.getByPlaceholderText("San Francisco");
        await userEvent.click(cityInput);
        await userEvent.keyboard("San Francisco");
        await userEvent.keyboard("{Enter}");

        const zipCodeInput = screen.getByPlaceholderText("75000");
        await userEvent.click(zipCodeInput);
        await userEvent.keyboard("75000");
        await userEvent.keyboard("{Enter}");

        const selectCustomOptions = document.getElementsByClassName("selectCustom-option");
        const alabama = selectCustomOptions[0];
        const legal = selectCustomOptions[63];

        await userEvent.click(alabama);
        await userEvent.click(legal);

        const submitBtn = screen.getByText("Save");
        await userEvent.click(submitBtn);

        const submitModal = screen.getByText("Employee created !");
        expect(submitModal).toBeInTheDocument();
      });
    });

    test("Then I should be able to navigate to the 'Current Employees' page.", async () => {
      const employeesListBtn = screen.getByText("View Current Employees");
      await userEvent.click(employeesListBtn);
      const h1 = screen.getByText("Current Employees");
      expect(h1).toBeInTheDocument();
    });
  });
});
