import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import AddEmployeeForm from "../../components/Forms/AddEmployeeForm/AddEmployeeForm";

export default function Home() {
  return (
    <div className="home">
      <h1>Create Employee</h1>

      <AddEmployeeForm />

      <Link to="employee-list">View Current Employees</Link>
    </div>
  );
}
