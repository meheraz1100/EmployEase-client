import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  // const [ isAdmin ] = useAdmin();

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    toast.success('log out success')
    .catch(error => console.log(error));
  }

  



  const navOptions = (
    <>
      {user ? <>
        <li>
          <Link>Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
        <li>
          <button onClick={handleLogOut}>Logout</button>
        </li>
      </> : <><li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
      </>}
    </>
  );

  return (
    <>
    <div>
      <div className="navbar bg-opacity-30 bg-base-100 text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl text-black dark:text-white" href="/">
            EmployEase
          </a>
        </div>
        <div className="flex-none">
          {user ? <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt=""
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black dark:text-white"
            >
              {navOptions}
            </ul>
          </div> : <Link to="/login" className="btn btn-ghost"><button>Login</button></Link>}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;
