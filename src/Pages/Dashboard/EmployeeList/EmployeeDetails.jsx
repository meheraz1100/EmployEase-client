import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'green'];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }
];




const EmployeeDetails = () => {
  const loadedData = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const {data: chartData = []} = useQuery({
    queryKey: ['employee-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/employee-stats');
      return res.data;
    }
  })

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    // eslint-disable-next-line
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="m-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-40" src={loadedData?.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title  capitalize">{loadedData?.name}</h2>
          <p>{loadedData?.email}</p>
          <p className="capitalize">Designation : {loadedData.designation}</p>
          <p>Salary ${loadedData.salary}</p>
          <p>Bank Account No.{loadedData.bank_account_no}</p>
          <div>
            {loadedData.verify === "true" ? (
              <div className="badge badge-accent">Verified Employee</div>
            ) : (
              <div className="badge badge-error gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Please Verify {loadedData.name}
              </div>
            )}
          </div>
          <div className="badge badge-primary">{loadedData.role}</div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>


      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>

    </div>
  );
};

export default EmployeeDetails;
