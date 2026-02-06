import { customersData } from "../data/customers";
function CustomerPage() {
  return (
    <div className="customer-page-container">
      <div className="customer-page-header">
        <h2>Customers</h2>
      </div>
      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.date}</td>
                <td>{customer.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerPage;
