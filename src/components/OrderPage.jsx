import { useState } from "react";

function OrderPage({orders, setOrders}) {
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openInvoice = (order) => {
    setSelectedOrder(order);
    setShowInvoice(true);
  };

  const closeInvoice = () => {
    setSelectedOrder(null);
    setShowInvoice(false);
  };

  const updateOrderStatus = (newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === selectedOrder?.id ? { ...order, status: newStatus } : order
      )
    );
    setSelectedOrder({ ...selectedOrder, status: newStatus });
  };

  return (
    <div className="order-page">
      <div className="order-page-header">
        <h2>Orders</h2>
      </div>
      <div className="order-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Items</th>
              <th>Order Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.totalItems} items</td>
                <td>{order.date}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Completed"
                        ? "Completed"
                        : order.status === "Pending"
                        ? "Pending"
                        : "Cancelled"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="invoice-btn"
                    onClick={() => openInvoice(order)}
                  >
                    View Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showInvoice && selectedOrder && (
        <div className="invoice-modal">
          <div className="invoice-content">
            <h3>Invoice for Order {selectedOrder.id}</h3>
            <div className="invoice-info">
              <p>
                Customer: <strong> {selectedOrder.customer}</strong>
              </p>
              <p>
                Order Date:<strong> {selectedOrder.date}</strong>
              </p>
              <p>
                Total Amount:
                <strong> ${selectedOrder.totalPrice.toFixed(2)}</strong>
              </p>
              <p>
                Status:
                <span
                  className={`badge ${
                    selectedOrder.status === "Completed"
                      ? "Completed"
                      : selectedOrder.status === "Pending"
                      ? "Pending"
                      : "Cancelled"
                  }`}
                >
                  {selectedOrder.status}
                </span>
              </p>
            </div>
            <div className="invoice-item">
              <h4>Item Details</h4>
              <table className="invoice-item-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.products &&
                    selectedOrder.products.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>
                        $
                        {selectedOrder.products
                          ? selectedOrder.products
                              .reduce(
                                (total, item) =>
                                  total + item.quantity * item.price,
                                0
                              )
                              .toFixed(2)
                          : 0}
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="status-buttons">
              <button
                className="status-btn completed"
                onClick={() => updateOrderStatus("Completed")}
              >
                Mark Completed
              </button>
              <button
                className="status-btn pending"
                onClick={() => updateOrderStatus("Pending")}
              >
                Mark Pending
              </button>
              <button
                className="status-btn cancelled"
                onClick={() => updateOrderStatus("Cancelled")}
              >
                Mark Cancelled
              </button>
            </div>
            <button className="close-invoice-btn" onClick={closeInvoice}>
              Close Invoice
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
