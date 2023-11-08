import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { State } from "../../types/inputs";
import Select from "../inputs/Select/Select";
import TextInput from "../inputs/TextInput/TextInput";
import { Employee } from "../../types/employees";
import _ from "lodash";

export default function EmployeesTable() {
  const employeesState = useSelector((state: { employees: [State] }) => state.employees);

  const [employees, setEmployees] = useState(employeesState.map((employee) => ({ ...employee })));
  const [inputsState, setInputsState] = useState({ showEntries: "10", search: "" });

  useEffect(() => {
    // Search filter algorithm
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

    setEmployees(filteredEmployees);
  }, [inputsState.search, employeesState]);

  const filterBy = (property: string, reverse?: string) => {
    // Deep copy
    const sortable = _.cloneDeep(employees);
    // Sorting
    sortable.sort((a, b) => (a[property] == b[property] ? 0 : a[property] < b[property] ? -1 : 1));
    reverse ? setEmployees(sortable.reverse()) : setEmployees(sortable);
  };

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
                <button onClick={() => filterBy("firstName")}>▴</button>
                <button onClick={() => filterBy("firstName", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              Last Name{" "}
              <div>
                <button onClick={() => filterBy("lastName")}>▴</button>
                <button onClick={() => filterBy("lastName", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              Date of Birth{" "}
              <div>
                <button onClick={() => filterBy("birthDate")}>▴</button>
                <button onClick={() => filterBy("birthDate", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              Start Date{" "}
              <div>
                <button onClick={() => filterBy("startDate")}>▴</button>
                <button onClick={() => filterBy("startDate", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              Department{" "}
              <div>
                <button onClick={() => filterBy("department")}>▴</button>
                <button onClick={() => filterBy("department", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              Street{" "}
              <div>
                <button onClick={() => filterBy("street")}>▴</button>
                <button onClick={() => filterBy("street", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              City{" "}
              <div>
                <button onClick={() => filterBy("city")}>▴</button>
                <button onClick={() => filterBy("city", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              State{" "}
              <div>
                <button onClick={() => filterBy("state")}>▴</button>
                <button onClick={() => filterBy("state", "reverse")}>▾</button>
              </div>
            </th>
            <th scope="col">
              Zip Code{" "}
              <div>
                <button onClick={() => filterBy("zipCode")}>▴</button>
                <button onClick={() => filterBy("zipCode", "reverse")}>▾</button>
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
    </div>
  );
}
