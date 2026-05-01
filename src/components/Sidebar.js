import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
return(
/* <div className="w-64 h-screen bg-gradient-to-b from-purple-700 to-indigo-800 text-white fixed left-0 top-0 p-6">

<h1 className="text-3xl font-bold mb-10">
InventoryPro
</h1>

<ul className="space-y-4">

<li>
<Link to="/dashboard" className="block p-3 rounded-xl hover:bg-white/20">
Dashboard
</Link>
</li>

<li>
<Link to="/products" className="block p-3 rounded-xl hover:bg-white/20">
Products
</Link>
</li>

<li>
<Link to="/suppliers" className="block p-3 rounded-xl hover:bg-white/20">
Suppliers
</Link>
</li>

<li>
<Link to="/transactions" className="block p-3 rounded-xl hover:bg-white/20">
Transactions
</Link>
</li>

<li>
<Link to="/lowstock" className="block p-3 rounded-xl hover:bg-white/20">
Low Stock
</Link>
</li>

</ul>

</div> */
    <nav
      className="navbar navbar-expand-lg  navbar-scroll shadow-0"
      style={{ backgroundColor: "#ffede7" }}
      
    >
      <div className="container">

        <a className="navbar-brand" href="/dashboard">InventoryPro</a>

        <button
          className="navbar-toggler ps-0"
          type="button"
        >
          <span className="d-flex justify-content-start align-items-center">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </div>
        

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="/products">Products</a>
            </li>
          </ul>
        </div>
        

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="/suppliers">Suppliers</a>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="/transactions">Transactions</a>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="/lowstock">lowstock</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;