import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";


const AdminHome = () => {

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    }
  })



  return (
    <div>
      <h1 className="lg:text-4xl text-center my-6">Welcome {user?.displayName}</h1>

      <div className="lg:m-10 text-2xl">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Paid Salary</div>
          <div className="stat-value">${stats.totalPaidSalary}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Paid Count</div>
          <div className="stat-value">{stats.paidSalary} Employee</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminHome;
