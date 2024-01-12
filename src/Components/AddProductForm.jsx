import React, { useState } from "react";

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    productId: "",
    productName: "",
    packSize: "",
    category: "milk",
    mrp: "",
    image: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Data Submitted:", productData);
    // Reset the form after submission
    setProductData({
      productId: "",
      productName: "",
      packSize: "",
      category: "milk",
      mrp: "",
      image: "",
      status: "active",
    });
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img className="short-logo" src="/logo.png" alt="" />
          <a className="navbar-brand">
            <b>Digital</b>flake
          </a>
          {/* <img src="/user-logo.jpg" className="user" alt="" /> */}
        </div>
      </nav>
      <div>
        <div className="user">
          {/* <img
            src="/user-logo.jpg"
            alt="User Logo"
            style={{ width: "30px", height: "30px" }}
          /> */}
        </div>
        <div className="sidebar">
          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#" className="active">
            Products
          </a>
        </div>
        <div className="container">
          <h2>Add New Product</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="productId">Product ID:</label>
            <input
              type="text"
              id="productId"
              name="productId"
              value={productData.productId}
              onChange={handleChange}
              required
            />

            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={productData.productName}
              onChange={handleChange}
              required
            />

            <label htmlFor="packSize">Pack Size:</label>
            <input
              type="text"
              id="packSize"
              name="packSize"
              value={productData.packSize}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              required
            >
              <option value="milk">Milk</option>
              <option value="fruits">Fruits</option>
            </select>

            <label htmlFor="mrp">MRP:</label>
            <input
              type="text"
              id="mrp"
              name="mrp"
              value={productData.mrp}
              onChange={handleChange}
              required
            />

            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={productData.image}
              onChange={handleChange}
              required
            />

            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={productData.status}
              onChange={handleChange}
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
