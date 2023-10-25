import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { increment, decrement } from "../../features/counter/counter";
// import { useSelector } from "react-redux";
// import { RootState } from "../../utils/store";

import "react-datepicker/dist/react-datepicker.css";
import AddEmployeeForm from "../../components/Forms/AddEmployeeForm/AddEmployeeForm";

export default function Home() {
  // const dispatch = useDispatch();
  // const counter = useSelector((state: RootState) => state.counter);

  return (
    <div className="home">
      <h1>Create Employee</h1>

      <AddEmployeeForm />

      <Link to="employee-list">View Current Employees</Link>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
        <p>{counter.value}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}
    </div>
  );
}
