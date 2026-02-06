import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { useNavigate } from "react-router-dom";

import { productData } from "../data/products";
import { ordersData } from "../data/orders";
import { customersData } from "../data/customers";

function DashboardLayout({setIsLoggedIn}) {

  const [showSidebar, setShowSidebar] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [customers, setCustomers] = useState(customersData);

  const toggleSidebar = () => { setShowSidebar(!showSidebar); };

  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : productData;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : ordersData;
  })

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
 
const navigate = useNavigate();

  const handleLogOut = () => {
    // Clear localStorage to reset to original data
    localStorage.removeItem("products");
    localStorage.removeItem("orders");
    
    // Reset products and orders to original data
    setProducts(productData);
    setOrders(ordersData);
    
    // Logout and redirect to login page
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className={`sidebar-wrapper ${showSidebar ? "" : "closed"}`}>
        {showSidebar &&(
          <Sidebar activePage={activePage} onPageChange={setActivePage} onLogout={handleLogOut}/>
        )}
        
      </div>

      <div className={`main-area ${showSidebar ? "" : "sidebar-collapsed"}`}>
        <Header onToggleSideBar={toggleSidebar} />
        
        <MainContent
          activePage={activePage}
          products={products}
          setProducts={setProducts}
          orders={orders}
          setOrders={setOrders}
          customers={customers}
        />
      </div>
    </div>
  );
}

export default DashboardLayout;

