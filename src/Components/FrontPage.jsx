import React from "react";

export default function FrontPage() {
  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">
              <h2>
                <img className="short-logo" src="/logo.png" alt="" />
                <b>digital</b>flake
              </h2>
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
            <a href="#" className="active">
              <img src="download.png" alt="" className="short-logo" />
              Home
            </a>

            <a href="#">
              <img src="category.png" alt="" className="short-logo" />
              Category
            </a>

            <a href="#">
              <img src="products.jpg" alt="" className="short-logo" />
              Products
            </a>
          </div>

          <div className="content">
            <img
              src="/front-logo.png"
              style={{ width: "270px", height: "160px" }}
            />
            {/* <p>Welcome to Digitalflake Admin</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
