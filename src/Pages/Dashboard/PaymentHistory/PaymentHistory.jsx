import { useEffect, useState } from "react";

const PaymentHistory = () => {

  // const { data: payments = [] } = useQuery({
  //   queryKey: ["payments", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/payments/${user?.email}`);
  //     return res.data;
  //   },
  // });
  // console.log(payments);

  const [ payments, setPayments ] = useState([]);
  useEffect(() => {
    fetch('https://m-72-employ-ease-server.vercel.app/payments')
    .then(res => res.json())
    .then(data => setPayments(data));
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-6">Payments</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>${payment.salary}</td>
              <td>{payment.email}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.status}</td>
              <td>{payment.date}</td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
