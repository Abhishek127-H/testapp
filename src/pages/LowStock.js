// // import React, { useContext } from "react";
// // import Sidebar from '../components/Sidebar';



// // import Navbar from '../components/Navbar';
// // import { AppContext } from '../context/AppContext';


// // function LowStock() {
// //   const { products } = useContext(AppContext);

// //   const lowItems = products.filter(
// //     (item) => Number(item.qty) <= 3
// //   );

// //   return (
// //     <div className="bg-gray-100 min-h-screen">

// //       <Sidebar />
// //       <Navbar />

// //       <div className="ml-64 p-8">

// //         <h1 className="text-3xl font-bold text-red-600 mb-6">
// //           Low Stock Alerts
// //         </h1>

// //         <div className="bg-white rounded-2xl shadow-lg p-6">

// //           <table className="w-full">

// //             <thead>
// //               <tr className="border-b text-left">
// //                 <th className="p-3">Code</th>
// //                 <th className="p-3">Product Name</th>
// //                 <th className="p-3">Qty Left</th>
// //                 <th className="p-3">Status</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {lowItems.map((item,index)=>(
// //                 <tr key={index} className="border-b">
// //                   <td className="p-3">{item.code}</td>
// //                   <td className="p-3">{item.name}</td>
// //                   <td className="p-3">{item.qty}</td>
// //                   <td className="p-3">
// //                     <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
// //                       Low Stock
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}

// //               {lowItems.length === 0 && (
// //                 <tr>
// //                   <td colSpan="4" className="p-6 text-center text-gray-500">
// //                     No Low Stock Products
// //                   </td>
// //                 </tr>
// //               )}

// //             </tbody>

// //           </table>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default LowStock;
// import React, { useContext } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import { AppContext } from "../context/AppContext";

// function LowStock() {
//   const { products = [] } = useContext(AppContext);

//   const lowItems = products.filter(
//     (item) => Number(item.qty) <= 3
//   );

//   return (
//     <div className="bg-gray-100 min-h-screen flex">
//       <Sidebar />

//       <div className="flex-1 ml-64">
//         <Navbar />

//         <div className="p-8">
//           <h1 className="text-3xl font-bold text-red-600 mb-6">
//             Low Stock Alerts
//           </h1>

//           <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b text-left bg-gray-100">
//                   <th className="p-3">Code</th>
//                   <th className="p-3">Product Name</th>
//                   <th className="p-3">Qty Left</th>
//                   <th className="p-3">Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {lowItems.length > 0 ? (
//                   lowItems.map((item, index) => (
//                     <tr key={index} className="border-b hover:bg-gray-50">
//                       <td className="p-3">{item.code}</td>
//                       <td className="p-3">{item.name}</td>
//                       <td className="p-3">{item.qty}</td>
//                       <td className="p-3">
//                         <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
//                           Low Stock
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan="4"
//                       className="p-6 text-center text-gray-500"
//                     >
//                       No Low Stock Products
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default LowStock;
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function LowStock() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

  const lowItems = products.filter(
    (item) => Number(item.qty) <= 3
  );

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-6">
            Low Stock Alerts
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left bg-gray-100">
                  <th className="p-3">Code</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Qty Left</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {lowItems.length > 0 ? (
                  lowItems.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{item.code || "-"}</td>
                      <td className="p-3">{item.name || "-"}</td>
                      <td className="p-3">{item.qty || 0}</td>
                      <td className="p-3">
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                          Low Stock
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-6 text-center text-gray-500">
                      No Low Stock Products
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LowStock;