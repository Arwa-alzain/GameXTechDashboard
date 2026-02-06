function ProductForm({
  showForm,
  closeForm,
  editProduct,
  handleSubmit,
  handleInputChange,
  formData,
}) {
  return (
    <>
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label className="product-name">Product Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="product-category">Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Audio">Audio</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Storage">Storage</option>
                  <option value="Bags">Bags</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Smart Home">Smart Home</option>
                </select>
              </div>
              <div className="form-group">
                <label className="product-description">Description:</label>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label className="product-price">Price:</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="product-stock">Stock:</label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="product-status">Status:</label>
                <select
                  name="active"
                  value={formData.active}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value={true}>Active</option>
                  <option value={false}>Out of Stock</option>
                </select>
              </div>
              <div className="form-group">
                <label>Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  accept="image/*"
                />
              </div>
              <div className="form-actions">
                <button
                  type="submit"
                  className="form-submit-btn"
                  onClick={handleSubmit}
                >
                  {editProduct ? "Update Product" : "Add Product"}
                </button>
                <button
                  type="button"
                  className="form-cancel-btn"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductForm;
