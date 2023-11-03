import { Link } from "react-router-dom";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";

export default function EmployeeList() {
  return (
    <div className="employee">
      <h1>Current Employees</h1>
      <EmployeesTable />
      <Link to="/">Home</Link>
    </div>
  );
}
