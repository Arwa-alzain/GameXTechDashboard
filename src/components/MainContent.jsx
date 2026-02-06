import ProductPage from "./ProductPage";
import OrderPage from "./OrderPage";
import CustomerPage from "./CustomerPage";
import GamingApi from "./GamingApi";
import OrderStatus from "./OrderStatus";
import StatCard from "./StatCard";
import ProductStatus from "./ProductStatus";


function MainContent({
  activePage,
  products,
  setProducts,
  orders,
  setOrders,
  customers,
}) {
  if (activePage === "products") {
    return <ProductPage products={products} setProducts={setProducts} />;
  }

  if (activePage === "orders") {
    return <OrderPage orders={orders} setOrders={setOrders} />;
  }

  if (activePage === "customers") {
    return <CustomerPage customers={customers} />;
  }

  if (activePage === "GamingApi") {
    return <GamingApi />;
  }

  return (
    <div className="main-content">
      <StatCard
        products={products}
        orders={orders}
        customers={customers}
      />

      <OrderStatus orderList={orders} />
      <ProductStatus products={products} />
    </div>
  );
}

export default MainContent;
