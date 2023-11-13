import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import type { State } from "../../types/inputs";
import Select from "../inputs/Select/Select";
import TextInput from "../inputs/TextInput/TextInput";
import { Employee } from "../../types/employees";

export default function EmployeesTable() {
  // Redux state recovery
  const employeesState = useSelector((state: { employees: [State] }) => state.employees);

  const [inputsState, setInputsState] = useState({ showEntries: "", search: "", sortBy: "" });

  // Number of entries to be displayed
  const [entriesCount, setEntriesCount] = useState(10);

  /* 
    Allow us to get around the fact that inputsState.showEntries
    isn't a valid value ("empty string")
    to be passed to parseInt() at first render.
  */
  if (inputsState.showEntries !== "" && parseInt(inputsState.showEntries) !== entriesCount) setEntriesCount(parseInt(inputsState.showEntries));

  // Current component page.
  const [page, setPage] = useState(1);
  // The total length of the employees displayed.
  const [total, setTotal] = useState(0);

  // Previous number of entries displayed (used to reset page state when inputsState evolves).
  const prevEntriesCount = useRef(entriesCount);
  // Array containing all the filtered then sorted employees (will be mapped on).
  const [employees, setEmployees] = useState(employeesState.map((employee) => ({ ...employee })));

  useEffect(() => {
    // Searching logic
    const filteredEmployees: Employee[] = [];

    // If one one the Employee's property contains the shearch value, the employee is pushed into the filteredEmployees array.
    employeesState.forEach((employee) => {
      let matches = false;
      for (const property in employee) {
        if (employee[property].toLowerCase().includes(inputsState.search.toLowerCase())) {
          matches = true;
        }
      }
      if (matches) filteredEmployees.push(employee as Employee);
    });

    // Sorting logic
    // We compare Date objects independently.
    if (inputsState.sortBy.includes("Date")) {
      // If reverse is specified, we sort then reverse the array.
      if (inputsState.sortBy.includes("reverse")) {
        const property = inputsState.sortBy.slice(0, inputsState.sortBy.indexOf("-"));
        // If the two values are different, we sort them.
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

    // Renaming for clarity reason.
    const sortedEmployees = filteredEmployees;

    // Paging logic
    /* 
      If the select input or the total length of the displayed employees evolves,
      then we reset the UI to the first page.
    */
    if (prevEntriesCount.current !== entriesCount || total !== sortedEmployees.length) {
      setPage(1);
    }

    // Then the total state is updated.
    setTotal(sortedEmployees.length);
    // Same here.
    prevEntriesCount.current = entriesCount;

    // We assign to the table the employees corresponding to the page and the number of entries selected.
    const toDisplay = sortedEmployees.slice(page * entriesCount - entriesCount, page * entriesCount - entriesCount + entriesCount);

    // Finally, the employees state is updated
    setEmployees(toDisplay);
  }, [inputsState, employeesState, page, entriesCount, total]);

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
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "firstName" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "firstName-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Last Name{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "lastName" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "lastName-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Date of Birth{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "birthDate" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "birthDate-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Start Date{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "startDate" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "startDate-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Department{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "department" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "department-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Street{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "street" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "street-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              City{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "city" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "city-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              State{" "}
              <div className="container-sort">
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "state" }))}>▴</button>
                <button onClick={() => setInputsState((state) => ({ ...state, sortBy: "state-reverse" }))}>▾</button>
              </div>
            </th>
            <th scope="col">
              Zip Code{" "}
              <div className="container-sort">
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
      <div className="paging">
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <span>
          page {page} of {Math.ceil(total / entriesCount)}
        </span>
        <button
          onClick={() => {
            if (page * entriesCount < total) setPage(page + 1);
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
