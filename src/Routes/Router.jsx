import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/Shared/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import AllEmployee from "../Pages/Dashboard/AllEmployee/AllEmployee";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import Progress from "../Pages/Dashboard/Progress/Progress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // admin route only
      {
        path: 'all-employee-list',
        element: <AllEmployee></AllEmployee>
      },
      {
        path: 'admin-home',
        element: <AdminHome></AdminHome>
      },
      // hr route only
      {
        path: 'employee-list',
        element: <EmployeeList></EmployeeList>
      },
      {
        path: 'progress',
        element: <Progress></Progress>
      }
    ]
  }
]);