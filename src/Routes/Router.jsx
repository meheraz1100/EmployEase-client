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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/WorkSheet/WorkSheet";
import EmployeeDetails from "../Pages/Dashboard/EmployeeList/EmployeeDetails";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Profile from "../Pages/Profile/Profile";
import Messages from "../Pages/Dashboard/Messages/Messages";
import VerifiedEmployeeAndHR from "../Pages/Dashboard/VerifiedEmployeeAndHR/VerifiedEmployeeAndHR";
import EmployeeDetailsAll from "../Pages/Dashboard/AllEmployee/EmployeeDetailsAll";
import Error from "../Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        },
        {
          path: "/profile",
          element: <Profile></Profile>
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
      {
        path: 'messages',
        element: <Messages></Messages>,
        loader: () => fetch('https://m-72-employ-ease-server.vercel.app/messages')
      },
      {
        path: 'verified-employee-and-hr',
        element: <VerifiedEmployeeAndHR></VerifiedEmployeeAndHR>,
        loader: () => fetch('https://m-72-employ-ease-server.vercel.app/verified-employee-and-hr')
      },
      {
        path: 'all-employee-list/employee-details/:id',
        element: <EmployeeDetailsAll></EmployeeDetailsAll>,
        loader: ({params}) => fetch(`https://m-72-employ-ease-server.vercel.app/employee-details/${params.id}`)
      },
      // hr route only
      {
        path: 'employee-list',
        element: <EmployeeList></EmployeeList>
      },
      {
        path: 'employee-list/employee-details/:id',
        element: <EmployeeDetails></EmployeeDetails>,
        loader: ({params}) => fetch(`https://m-72-employ-ease-server.vercel.app/employee-details/${params.id}`)
      },
      {
        path: 'employee-list/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://m-72-employ-ease-server.vercel.app/payment/${params.id}`)
      },
      {
        path: 'progress',
        element: <Progress></Progress>,
        loader: () => fetch('https://m-72-employ-ease-server.vercel.app/worksheet')
      },
      // employee route only
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'work-sheet',
        element: <WorkSheet></WorkSheet>
      }
    ]
  }
]);