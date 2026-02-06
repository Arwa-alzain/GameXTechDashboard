function ProductStatus({ products = [] }) {
  const total = products.length || 1; // يمنع القسمة على صفر

  const inStockProducts = products.filter(
    (product) => Number(product.stock) > 0 && product.active
  );

  const outOfStockProducts = products.filter(
    (product) => Number(product.stock) === 0
  );

  const inStockPercent = (inStockProducts.length / total) * 100;
  const outStockPercent = (outOfStockProducts.length / total) * 100;

  return (
    <div className="product-status-bar">
      <h3>Product Status</h3>

      <div className="status-bar">
        <span>In Stock</span>

        <div className="status-bar-bg">
          <div
            className="status-inStock"
            style={{ width: `${inStockPercent}%` }}
          />
        </div>

        <span>{inStockProducts.length}</span>
      </div>

      <div className="status-bar">
        <span>Out of Stock</span>

        <div className="status-bar-bg">
          <div
            className="status-outStock"
            style={{ width: `${outStockPercent}%` }}
          />
        </div>

        <span>{outOfStockProducts.length}</span>
      </div>
    </div>
  );
}

export default ProductStatus;

