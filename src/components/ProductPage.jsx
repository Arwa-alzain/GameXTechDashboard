import { useState } from "react";
import ProductForm from "./ProductForm";
function ProductPage({products, setProducts}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    active: "",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageUrl =
      typeof formData.image === "object" && formData.image
        ? URL.createObjectURL(formData.image)
        : formData.image;

    if (editProduct) {
      setProducts(
        products.map((item) =>
          item.id === editProduct
            ? {
                ...item,
                name: formData.name,
                category: formData.category,
                description: formData.description,
                price: formData.price,
                stock: formData.stock,
                active: formData.stock > 0,
                image: imageUrl,
              }
            : item
        )
      );
    } else {
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

      const newProduct = {
        id: newId,
        name: formData.name,
        category: formData.category,
        description: formData.description,
        price: formData.price,
        stock: formData.stock,
        active: formData.stock > 0,
        image: imageUrl,
      };
      setProducts([...products, newProduct]);
    }
    closeForm();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file" && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const openAddForm = () => {
    setEditProduct(null);
    setFormData({
      name: "",
      category: "",
      description: "",
      price: "",
      stock: "",
      active: "",
      image: "",
    });
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setEditProduct(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      stock: product.stock,
      active: product.active,
      image: product.image,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setEditProduct(null);
    setFormData({
      name: "",
      category: "",
      description: "",
      price: "",
      stock: "",
      active: "",
      image: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <ProductForm
        showForm={showForm}
        closeForm={closeForm}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editProduct={editProduct}
      />
      <div>
        <div className="product-page-header">
          <h2>Products</h2>
          <button className="btn-add" onClick={openAddForm}>
            Add Product
          </button>
        </div>
        <div className="product-table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={`${item.id}-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    <span
                      className={
                        item.active ? "badge active" : "badge inactive"
                      }
                    >
                      {item.active ? "Active" : "Out of Stock"}
                    </span>
                  </td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => openEditForm(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
