import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import userEvent from "@testing-library/user-event";
// import matchers from "@testing-library/jest-dom/matchers";
// expect.extend(matchers);

import App from "./App";

describe("Given I am an user.", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });
  describe("When I arrive on the application.", () => {
    test("Then I should be able to see the logo and the baseline.", () => {
      const logo = screen.getByTestId("logo");
      const baseline = screen.getByText("Business tools");
      expect(logo).toBeVisible();
      expect(baseline).toBeVisible();
    });

    test("Then I should be able to see the main title.", () => {
      const h1 = screen.getByText("Create Employee");
      expect(h1).toBeVisible();
    });

    test("Then I should be able to see the form to register a new employee.", () => {
      const form = screen.getByTestId("create-employee-form");
      expect(form).toBeVisible();
    });

    test("Then I should be able to navigate to the 'Current Employees' page.", async () => {
      const employeesListBtn = screen.getByText("View Current Employees");
      await userEvent.click(employeesListBtn);
      const h1 = screen.getByText("Current Employees");
      expect(h1).toBeVisible();
    });
  });
});
