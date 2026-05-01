// // import React, { useContext } from "react";
// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";
// // import { AppContext } from "../context/AppContext";

// // function Dashboard() {
// //   const { products, suppliers, transactions } = useContext(AppContext);

// //   const lowStockCount = products.filter(
// //     (item) => Number(item.qty) <= 3
// //   ).length;

// //   const stockInCount = transactions.filter(
// //     (item) => item.type === "IN"
// //   ).length;

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-green-700 via-black to-blue-800">

// //       <Sidebar />
// //       <Navbar />

// //       <div className="ml-64 p-8">

// //         <h2 className="text-3xl font-bold text-white mb-8">
// //           Dashboard Overview
// //         </h2>

// //         <div className="grid grid-cols-4 gap-6">

// //           <div className="bg-gradient-to-r from-green-500 via-black to-blue-600 text-white p-6 rounded-2xl shadow-xl">
// //             <h3 className="text-xl font-semibold">Total Products</h3>
// //             <p className="text-4xl mt-4 font-bold">{products.length}</p>
// //           </div>

// //           <div className="bg-gradient-to-r from-blue-600 via-black to-green-500 text-white p-6 rounded-2xl shadow-xl">
// //             <h3 className="text-xl font-semibold">Suppliers</h3>
// //             <p className="text-4xl mt-4 font-bold">{suppliers.length}</p>
// //           </div>

// //           <div className="bg-gradient-to-r from-green-600 via-black to-cyan-500 text-white p-6 rounded-2xl shadow-xl">
// //             <h3 className="text-xl font-semibold">Stock IN</h3>
// //             <p className="text-4xl mt-4 font-bold">{stockInCount}</p>
// //           </div>

// //           <div className="bg-gradient-to-r from-blue-700 via-black to-green-600 text-white p-6 rounded-2xl shadow-xl">
// //             <h3 className="text-xl font-semibold">Low Stock</h3>
// //             <p className="text-4xl mt-4 font-bold">{lowStockCount}</p>
// //           </div>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;
// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function Dashboard() {
//   return (
//     <div className="bg-gray-100 min-h-screen flex">
//       <Sidebar />

//       <div className="flex-1 ml-64">
//         <Navbar />

//         <div className="p-8">
//           <h1 className="text-3xl font-bold text-black mb-6">
//             Dashboard
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h2 className="text-gray-600 text-lg">Total Products</h2>
//               <p className="text-3xl font-bold text-blue-600">0</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h2 className="text-gray-600 text-lg">Suppliers</h2>
//               <p className="text-3xl font-bold text-green-600">0</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h2 className="text-gray-600 text-lg">Transactions</h2>
//               <p className="text-3xl font-bold text-purple-600">0</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h2 className="text-gray-600 text-lg">Low Stock</h2>
//               <p className="text-3xl font-bold text-red-600">0</p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
    setSuppliers(JSON.parse(localStorage.getItem("suppliers")) || []);
    setTransactions(JSON.parse(localStorage.getItem("transactions")) || []);
  }, []);

  const lowStock = products.filter(
    (item) => Number(item.qty) <= 3
  ).length;

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-black mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-gray-600">Total Products</h2>
              <p className="text-3xl font-bold text-blue-600">
                {products.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-gray-600">Suppliers</h2>
              <p className="text-3xl font-bold text-green-600">
                {suppliers.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-gray-600">Transactions</h2>
              <p className="text-3xl font-bold text-purple-600">
                {transactions.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-gray-600">Low Stock</h2>
              <p className="text-3xl font-bold text-red-600">
                {lowStock}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;