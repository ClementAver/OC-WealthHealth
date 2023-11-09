import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import type { State } from "../../types/inputs";
import Select from "../inputs/Select/Select";
import TextInput from "../inputs/TextInput/TextInput";
import { Employee } from "../../types/employees";
// import _ from "lodash";

export default function EmployeesTable() {
  const employeesState = useSelector((state: { employees: [State] }) => state.employees);

  const [inputsState, setInputsState] = useState({ showEntries: "10", search: "", sortBy: "" });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const prevEntriesCount = useRef(inputsState.showEntries);
  // Will be mapped on.
  const [employees, setEmployees] = useState(employeesState.map((employee) => ({ ...employee })));

  useEffect(() => {
    // Searching logic
    const filteredEmployees: Employee[] = [];

    employeesState.forEach((employee) => {
      let matches = false;
      for (const property in employee) {
        if (employee[property].toString().toLowerCase().includes(inputsState.search.toLowerCase())) {
          matches = true;
        }
      }
      if (matches) filteredEmployees.push(employee as Employee);
    });

    // Sorting logic
    if (inputsState.sortBy.includes("Date")) {
      if (inputsState.sortBy.includes("reverse")) {
        const property = inputsState.sortBy.slice(0, inputsState.sortBy.indexOf("-"));

        filteredEmployees.sort((a, b) => (a[inputsState.sortBy] == b[property] ? 0 : new Date(a[property]) > new Date(b[property]) ? -1 : 1));
      } else {
        filteredEmployees.sort((a, b) => (a[inputsState.sortBy] == b[inputsState.sortBy] ? 0 : new Date(a[inputsState.sortBy]) < new Date(b[inputsState.sortBy]) ? -1 : 1));
      }
    } else {
      if (inputsState.sortBy.includes("reverse")) {
        const property = inputsState.sortBy.slice(0, inputsState.sortBy.indexOf("-"));
        filteredEmployees.sort((a, b) => (a[property] == b[property] ? 0 : a[property].toLowerCase() > b[property].toLowerCase() ? -1 : 1));
      } else {
        filteredEmployees.sort((a, b) => (a[inputsState.sortBy] == b[inputsState.sortBy] ? 0 : a[inputsState.sortBy].toLowerCase() < b[inputsState.sortBy].toLowerCase() ? -1 : 1));
      }
    }

    // Paging logic

    if (prevEntriesCount.current !== inputsState.showEntries) {
      setPage(1);
    }

    prevEntriesCount.current = inputsState.showEntries;

    const sortedEmployees = filteredEmployees;
    const entriesCount = parseInt(inputsState.showEntries);

    setTotal(sortedEmployees.length);
    const toDisplay = sortedEmployees.slice(page * entriesCount - entriesCount, page * entriesCount - entriesCount + entriesCount);
    setEmployees(toDisplay);
  }, [inputsState, page, employeesState]);

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
            <th scope="col">
              First Name
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "firstName" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "firstName-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Last Name{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "lastName" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "lastName-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Date of Birth{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "birthDate" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "birthDate-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Start Date{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "startDate" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "startDate-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Department{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "department" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "department-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Street{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "street" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "street-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              City{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "city" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "city-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              State{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "state" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "state-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Zip Code{" "}
              <div>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "zipCode" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "zipCode-reverse" }))}>▾</button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
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
      <div>
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          ◂
        </button>
        <span>page : {page}</span>
        <button
          onClick={() => {
            if (page * parseInt(inputsState.showEntries) < total) setPage(page + 1);
          }}
        >
          ▸
        </button>
      </div>
    </div>
  );
}
