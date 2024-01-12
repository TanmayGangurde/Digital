import React from "react";

export default function Category() {
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

        {/* <div className="content">
          <img
            src="/image 289.svg"
            style={{ width: "100px", height: "200px" }}
          />
        </div> */}

        <h2 className="category-heading">Category Management</h2>
        <div class="content2">
          <table class="category-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Milk</td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, ducimus?
                </td>
                <td class="status-active">Active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fruits</td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quo ipsa harum.
                </td>
                <td class="status-active">Active</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Vegetables</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                <td class="status-inactive">Inactive</td>
              </tr>
            </tbody>
          </table>

          <button className="category-button">Add New Category</button>
        </div>
      </div>
    </div>
  );
}
