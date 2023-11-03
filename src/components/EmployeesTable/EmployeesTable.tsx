import { useSelector } from "react-redux";
import type { State } from "../../components/inputs/inputs";

export default function EmployeesTable() {
  const employees = useSelector((state: { employees: [State] }) => state.employees);

  return (
    <>
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
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.birthDate.toString().slice(0, 10)}</td>
              <td>{employee.startDate.toString().slice(0, 10)}</td>
              <td>{employee.department}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
