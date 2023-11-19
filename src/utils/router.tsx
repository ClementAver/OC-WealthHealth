import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import EmployeeList from "../pages/Employees-list/EmployeesList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee-list",
        element: <EmployeeList />,
      },
    ],
  },
]);
