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
      expect(logo).toBeVisible();
    });

    test("Then I should be able to see the main title.", () => {
      const h1 = screen.getByText("Create Employee");
      expect(h1).toBeVisible();
    });

    test("Then I should be able to see the form to register a new employee.", () => {
      const form = screen.getByTestId("create-employee-form");
      expect(form).toBeVisible();
    });

    describe("Then I should be able to enter a name in the corresponding input.", () => {
      beforeEach(async () => {
        const firstNameInput = screen.getByPlaceholderText("John");
        await userEvent.click(firstNameInput);
      });
      test("If the data entered does not correspond to the input's expectations on submit, I should be warned.", async () => {
        await userEvent.keyboard("{Enter}");
        const firsNameInputContainer = document.getElementsByClassName("form__item");
        // The input is empty, therefore the warning message should be added to the DOM on submission.
        expect(firsNameInputContainer[0].childNodes.length).toBe(3);
      });
      test("Otherwise, I shouldn't", async () => {
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

    test("Then I should be able to navigate to the 'Current Employees' page.", async () => {
      const employeesListBtn = screen.getByText("View Current Employees");
      await userEvent.click(employeesListBtn);
      const h1 = screen.getByText("Current Employees");
      expect(h1).toBeVisible();
    });
  });
});
