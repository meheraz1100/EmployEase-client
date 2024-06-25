import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const EmployeeDetailsAll = () => {
  const loadedData = useLoaderData();
  const [inputValue, setInputValue] = useState('')
  const floatedFromDB = parseFloat(loadedData.salary)



  const handleChange = (event) => {
    const value = event.target.value;
    const floatedValue = value
    console.log(floatedValue);
    setInputValue(event.target.value);
  };

  const handleUpdateSalary = (e) => {
    e.preventDefault();
    const form = e.target;
    const salary = form.salary.value;
    
    const updatedSalary = {salary}
    // const floatedValue = updatedSalary
    console.log(updatedSalary.salary);
    const floatedValue = parseFloat(updatedSalary.salary)
    console.log(floatedValue);
    console.log(typeof floatedValue)

    
    if(inputValue > floatedFromDB){
      fetch(`https://m-72-employ-ease-server.vercel.app/users/${loadedData._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedSalary)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('Salary Updated Successfully!!!')
      })
    }
    else if(inputValue < loadedData.salary){
      toast.warning('You Can not Decrease salary of Employee')
    }
    else if(inputValue === loadedData.salary){
      toast.warning('Please Provide a Bigger Value from current Salary')
    }
    else{
      toast.warn('Unknown Error')
    }
  }


  return (
    <div className="m-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-40" src={loadedData?.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title  capitalize">Name : {loadedData?.name}</h2>
          <p>Email: {loadedData?.email}</p>
          <p className="capitalize">Designation : {loadedData.designation}</p>


          {/* update salary */}
          <div className="border-2 p-6 rounded-lg">
          <p className="text-center mb-4">Update Employee Salary: </p>
          <form onSubmit={handleUpdateSalary} className="flex justify-evenly">
            <input type="number" onChange={handleChange} className="p-2 border-gray-500 rounded-md" defaultValue={loadedData.salary} name="salary" />
            <input type="submit" className="btn btn-ghost" value="Save" />
            
          </form>
          
          </div>


          
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
    </div>
  );
};

export default EmployeeDetailsAll;
