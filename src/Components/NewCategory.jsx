import React from "react";

export default function NewCategory() {
  return (
    <div>
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
      </div>
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
          <a href="#" className="active">
            Category
          </a>
          <a href="#">Products</a>
        </div>

        <div className="content">
          {/* <img
            src="/image 289.svg"
            style={{ width: "100px", height: "200px" }}
          /> */}
          {/* <p>Welcome to Digitalflake Admin</p> */}
        </div>
      </div>
      <div className="container">
        <h2>Add New Category</h2>

        <form action="/add_category" method="post" />

        <label for="categoryName">Category Name:</label>
        <input type="text" id="categoryName" name="categoryName" required />

        <label for="categoryDescription">Category Description:</label>
        <input
          type="text"
          id="categoryDescription"
          name="categoryDescription"
          required
        />

        <label for="categoryStatus">Category Status:</label>
        <select id="categoryStatus" name="categoryStatus" required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button type="submit">Add Category</button>
        <form />
      </div>
    </div>
  );
}
