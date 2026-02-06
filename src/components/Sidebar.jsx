import React from "react";

function Sidebar({ activePage, onPageChange, onLogout }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "orders", label: "Orders" },
    { id: "customers", label: "Customers" },
    { id: "GamingApi", label: "Gaming Api" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2 className="brand">GameX Tech</h2>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={
                  activePage === item.id ? "nav-item active" : "nav-title"
                }
                onClick={() => onPageChange(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
