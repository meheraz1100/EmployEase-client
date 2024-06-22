import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useHR from "../Hooks/useHR";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isHR] = useHR();
  // const isAdmin = true;
  return (
    <>
      <Helmet>
        <title>EmployEase | Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="w-64 min-h-screen bg-blue-500 dark:text-white">
          {/* dashboard side bar */}
          {/* <ul className="menu p-4">
                    {
                        isAdmin && (<>
                        
                        <li><NavLink to="/dashboard/all-employee-list">All Employee</NavLink></li>
                        <li><NavLink to={`/dashboard/admin-home/`}>Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/messages'>Messages</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        </> 

                    )

                    }
                    {
                        isHR && (<>
                        <li><NavLink to="/dashboard/employee-list">Employee list</NavLink></li>
                        <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        </>)
                    }
                    {
                        !isAdmin && !isHR && (
                            <>
                            <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            </>
                        )
                    }
                </ul> */}
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full navbar ">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-none hidden lg:block">
                <ul className="menu p-4">
                    {
                        isAdmin && (<>
                        
                        <li><NavLink to="/dashboard/all-employee-list">All Employee</NavLink></li>
                        <li><NavLink to={`/dashboard/admin-home/`}>Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/messages'>Messages</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        </> 

                    )

                    }
                    {
                        isHR && (<>
                        <li><NavLink to="/dashboard/employee-list">Employee list</NavLink></li>
                        <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        </>)
                    }
                    {
                        !isAdmin && !isHR && (
                            <>
                            <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            </>
                        )
                    }
                </ul>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4">
                    {
                        isAdmin && (<>
                        
                        <li><NavLink to="/dashboard/all-employee-list">All Employee</NavLink></li>
                        <li><NavLink to={`/dashboard/admin-home/`}>Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/messages'>Messages</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        </> 

                    )

                    }
                    {
                        isHR && (<>
                        <li><NavLink to="/dashboard/employee-list">Employee list</NavLink></li>
                        <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        </>)
                    }
                    {
                        !isAdmin && !isHR && (
                            <>
                            <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            </>
                        )
                    }
                </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// {isAdmin ? (<>
//     <li><NavLink to="/dashboard/all-employee-list">All Employee</NavLink></li>
//     <li><NavLink to={`/dashboard/admin-home/`}>Admin Home</NavLink></li>
//     <li><NavLink to="/">Home</NavLink></li>
// </>) :
// (<>
// <li><NavLink to="/dashboard/employee-list">Employee list</NavLink></li>
// <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
// <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
// <li><NavLink to="/">Home</NavLink></li>
// </>)
// }
// {
//     isHR ?
//     <>
//     <li><NavLink to="/dashboard/employee-list">Employee list</NavLink></li>
//     <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
//     <li><NavLink to="/">Home</NavLink></li>
//     </> :
//     <>
//     <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
//     <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
//     <li><NavLink to="/">Home</NavLink></li>
//     </>
// }
