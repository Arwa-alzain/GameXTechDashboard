function Header({ onToggleSideBar }) {
  const pageTitle = {
    dashboard: "Dashboard",
    products: "Products",
    orders: "Orders",
    customers: "Customers",
    GamingApi: "GamingApi",
  };

  return (
    <header className="header">
      <div className="header-container">
        <button onClick={onToggleSideBar} className="sidebar-btn">
          ☰
        </button>
      </div>
      {/* <h3 className="header-title">{pageTitle[activePage]}</h3> */}
    </header>
  );
}

export default Header;
