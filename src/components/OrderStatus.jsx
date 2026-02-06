function OrderStatus({ orderList = [] }) {
  const total = orderList.length || 1; // يمنع القسمة على صفر

  const completedOrders = orderList.filter(
    (order) => order.status === "Completed"
  ).length;

  const pendingOrders = orderList.filter(
    (order) => order.status === "Pending"
  ).length;

  const cancelledOrders = orderList.filter(
    (order) => order.status === "Cancelled"
  ).length;

  const completedPercent = (completedOrders / total) * 100;
  const pendingPercent = (pendingOrders / total) * 100;
  const cancelledPercent = (cancelledOrders / total) * 100;

  return (
    <div className="order-status">
      <h3>Order Status</h3>

      <div className="status-bar">
        <span>Completed</span>
        <div className="status-bar-bg">
          <div
            className="status-completed"
            style={{ width: `${completedPercent}%` }}
          />
        </div>
        <span>{completedOrders}</span>
      </div>

      <div className="status-bar">
        <span>Pending</span>
        <div className="status-bar-bg">
          <div
            className="status-pending"
            style={{ width: `${pendingPercent}%` }}
          />
        </div>
        <span>{pendingOrders}</span>
      </div>

      <div className="status-bar">
        <span>Cancelled</span>
        <div className="status-bar-bg">
          <div
            className="status-cancelled"
            style={{ width: `${cancelledPercent}%` }}
          />
        </div>
        <span>{cancelledOrders}</span>
      </div>
    </div>
  );
}

export default OrderStatus;

