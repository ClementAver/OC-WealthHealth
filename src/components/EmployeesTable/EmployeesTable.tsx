import { useSelector } from "react-redux";
import { useState } from "react";
import type { State } from "../../types/inputs";
import Select from "../inputs/Select/Select";
import TextInput from "../inputs/TextInput/TextInput";
import { Employee } from "../../types/employees";

export default function EmployeesTable() {
  const employees = useSelector((state: { employees: [State] }) => state.employees);

  const [inputsState, setInputsState] = useState({ showEntries: "10", search: "" });

  const filteredEmployees: Employee[] = [];

  const searchAlgorithm = (search: string) => {
    employees.forEach((employee) => {
      let matches = false;
      for (const property in employee) {
        if (employee[property].toString().toLowerCase().includes(search.toLowerCase())) {
          matches = true;
        }
      }
      if (matches) filteredEmployees.push(employee as Employee);
    });
  };

  searchAlgorithm(inputsState.search);

  return (
    <div className="employees-table">
      <form className="form">
        <div className="form__container">
          <div className="form__item form__item--half">
            <Select
              inputsState={inputsState}
              inputState="showEntries"
              setInputsState={setInputsState}
              id="entries-displayed"
              label="Entries displayed :"
              placeholder={"Default (10)"}
              options={[
                { value: "10", labor: "10" },
                { value: "25", labor: "25" },
                { value: "50", labor: "50" },
                { value: "100", labor: "100" },
              ]}
            />
          </div>

          <div className="form__item form__item--half">
            <TextInput
              inputsState={inputsState}
              inputState="search"
              setInputsState={setInputsState}
              id="search"
              label="Search"
              placeholder="John"
            />
          </div>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Start Date</th>
            <th scope="col">Department</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.birthDate.toString().slice(0, 15)}</td>
              <td>{employee.startDate.toString().slice(0, 15)}</td>
              <td>{employee.department}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
