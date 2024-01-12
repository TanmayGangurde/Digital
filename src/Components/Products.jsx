import React from "react";

export default function Products() {
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

        <h2 className="category-heading">Products</h2>
        <div class="content2">
          <table class="category-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Pack Size</th>
                <th>Category</th>
                <th>MRP</th>
                <th>Image</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Amul Milk</td>
                <td>1 ltr</td>
                <td>Milk</td>
                <td>Rs.28</td>
                <td>
                  <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FAmul-Homogenised-Toned-500ml-Pouch%2Fdp%2FB0752ZYSPS&psig=AOvVaw3ZWEhmDyMDl3Xx7fdQhLXp&ust=1705063061594000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODK-IKt1YMDFQAAAAAdAAAAABAD"></a>
                </td>
                <td class="status-active">Active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Banana</td>
                <td>1kg</td>
                <td>Fruits</td>
                <td>Rs.50</td>
                <td>
                  <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbanana&psig=AOvVaw0w--vZ2p42jr-rm6EnMh98&ust=1705062640032000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCLi1qLmr1YMDFQAAAAAdAAAAABAE"></a>
                </td>
                <td class="status-active">Active</td>
              </tr>
            </tbody>
          </table>

          <button className="category-button">Add New Category</button>
        </div>
      </div>
    </div>
  );
}
