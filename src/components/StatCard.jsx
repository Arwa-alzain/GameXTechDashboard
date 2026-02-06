function StatCard({ products = [], orders = [], customers = [] }) {
  const totalProducts = products.length;
  const totalCustomers = customers.length;

  const totalOrders = orders.filter(
    (order) => order.status !== "Cancelled" 
  ).length
  

  const outProduct = products.filter(
    (product) => Number(product.stock) === 0
  ).length;

  const revenue = orders.reduce(
    (total, order) => 
      order.status !== "Cancelled"  ? total + Number(order.totalPrice || 0) : total,
    0
  );

  return (
    <div className="stat-card-container">
      <h2>Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card revenue">
          <div className="icon">💰</div>
          <div className="card-details">
            <h3>Total Revenue</h3>
            <p>${revenue.toFixed(2)}</p>
          </div>
        </div>

        <div className="card products">
          <div className="icon">📦</div>
          <div className="card-details">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </div>
        </div>

        <div className="card orders">
          <div className="icon">🛒</div>
          <div className="card-details">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>
        </div>

        <div className="card customers">
          <div className="icon">👥</div>
          <div className="card-details">
            <h3>Total Customers</h3>
            <p>{totalCustomers}</p>
          </div>
        </div>

        <div className="card out">
          <div className="icon">⚠️</div>
          <div className="card-details">
            <h3>Total Out of Stock</h3>
            <p>{outProduct}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
