import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const routesList = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
];

export default routesList;
