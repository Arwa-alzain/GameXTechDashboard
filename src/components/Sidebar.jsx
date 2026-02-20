import React from "react";

function Sidebar({ activePage, onPageChange, onLogout, onClose }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "orders", label: "Orders" },
    { id: "customers", label: "Customers" },
    { id: "GamingApi", label: "Gaming Api" },
  ];

  // Handle navigation with sidebar close on mobile
  const handleNavClick = (itemId) => {
    onPageChange(itemId);
    if (onClose) {
      onClose();
    }
  };

  // Handle logout with sidebar close
  const handleLogout = () => {
    if (onClose) {
      onClose();
    }
    onLogout();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-header">
          <h2 className="brand">GameX Tech</h2>
          <button className="sidebar-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={
                  activePage === item.id ? "nav-item active" : "nav-title"
                }
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
