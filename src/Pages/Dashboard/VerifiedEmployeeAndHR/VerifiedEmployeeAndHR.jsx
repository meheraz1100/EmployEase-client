import { useLoaderData } from "react-router-dom";

const VerifiedEmployeeAndHR = () => {
  const loadedData = useLoaderData();
  
  console.log(loadedData);
  return (
    <div>
      <h1 className="lg:text-3xl text-center font-bold underline my-6">Verified Employee And HR s</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {loadedData.map((user, index) => (<tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td>{user.email}</td>
            </tr>))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerifiedEmployeeAndHR;
