
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-500 dark:text-white">
                {/* dashboard side bar */}
                <ul className="menu p-4">
                    {isAdmin ? (<>
                        <li><NavLink to="/dashboard/all-employee-list">All Employee</NavLink></li>
                        <li><NavLink to={`/dashboard/admin-home/`}>Admin Home</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                    </>) : 
                    (<>
                    <li><NavLink to="/dashboard/employee-list">Employee list</NavLink></li>
                    <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    </>)
                    }
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;