// // // // import React, { useState, useContext } from "react";
// // // // import Sidebar from "../components/Sidebar";
// // // // import Navbar from '../components/Navbar';
// // // // import { AppContext } from '../context/AppContext';


// // // // function Transactions() {
// // // //   const { transactions, setTransactions } = useContext(AppContext);

// // // //   const [form, setForm] = useState({
// // // //     product: "",
// // // //     type: "IN",
// // // //     qty: "",
// // // //     note: ""
// // // //   });

// // // //   const addTxn = () => {
// // // //     if (!form.product || !form.qty) return;

// // // //     setTransactions([
// // // //       ...transactions,
// // // //       {
// // // //         ...form,
// // // //         date: new Date().toLocaleString()
// // // //       }
// // // //     ]);

// // // //     setForm({
// // // //       product: "",
// // // //       type: "IN",
// // // //       qty: "",
// // // //       note: ""
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="bg-gray-100 min-h-screen">

// // // //       <Sidebar />
// // // //       <Navbar />

// // // //       <div className="ml-64 p-8">

// // // //         <h1 className="text-3xl font-bold text-green-700 mb-6">
// // // //           Transactions
// // // //         </h1>

// // // //         <div className="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-4 gap-4 mb-8">

// // // //           <input
// // // //             placeholder="Product Name"
// // // //             value={form.product}
// // // //             onChange={(e)=>setForm({...form,product:e.target.value})}
// // // //             className="border p-3 rounded-xl"
// // // //           />

// // // //           <select
// // // //             value={form.type}
// // // //             onChange={(e)=>setForm({...form,type:e.target.value})}
// // // //             className="border p-3 rounded-xl"
// // // //           >
// // // //             <option>IN</option>
// // // //             <option>OUT</option>
// // // //           </select>

// // // //           <input
// // // //             placeholder="Quantity"
// // // //             value={form.qty}
// // // //             onChange={(e)=>setForm({...form,qty:e.target.value})}
// // // //             className="border p-3 rounded-xl"
// // // //           />

// // // //           <input
// // // //             placeholder="Note"
// // // //             value={form.note}
// // // //             onChange={(e)=>setForm({...form,note:e.target.value})}
// // // //             className="border p-3 rounded-xl"
// // // //           />

// // // //         </div>

// // // //         <button type="button" class="btn btn-primary"
// // // //           onClick={addTxn}
          
// // // //         >
// // // //           Add Transaction
// // // //         </button>

// // // //         <div className="bg-white rounded-2xl shadow-lg p-6">

// // // //           <table className="w-full">

// // // //             <thead>
// // // //               <tr className="border-b text-left">
// // // //                 <th className="p-3">Date</th>
// // // //                 <th className="p-3">Product</th>
// // // //                 <th className="p-3">Type</th>
// // // //                 <th className="p-3">Qty</th>
// // // //                 <th className="p-3">Note</th>
// // // //               </tr>
// // // //             </thead>

// // // //             <tbody>
// // // //               {transactions.map((item,index)=>(
// // // //                 <tr key={index} className="border-b">
// // // //                   <td className="p-3">{item.date}</td>
// // // //                   <td className="p-3">{item.product}</td>
// // // //                   <td className="p-3">{item.type}</td>
// // // //                   <td className="p-3">{item.qty}</td>
// // // //                   <td className="p-3">{item.note}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>

// // // //           </table>

// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Transactions;
// // // import React from "react";

// // // function Transactions() {
// // //   return (
// // //     <div>
// // //       <h1>Hello Transactions </h1>
// // //     </div>
// // //   );
// // // }

// // // export default Transactions;

// // import React, { useState } from "react";

// // function Transactions() {
// //   const [transactions, setTransactions] = useState([]);

// //   const [form, setForm] = useState({
// //     product: "",
// //     type: "IN",
// //     qty: "",
// //     note: ""
// //   });

// //   const addTxn = () => {
// //     if (!form.product || !form.qty) return;

// //     setTransactions([
// //       ...transactions,
// //       {
// //         ...form,
// //         date: new Date().toLocaleString()
// //       }
// //     ]);

// //     setForm({
// //       product: "",
// //       type: "IN",
// //       qty: "",
// //       note: ""
// //     });
// //   };

// //   return (
// //     <div className="bg-gray-100 min-h-screen p-8">

// //       <h1 className="text-3xl font-bold text-green-700 mb-6">
// //         Transactions
// //       </h1>

// //       {/* Form */}
// //       <div className="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

// //         <input
// //           placeholder="Product Name"
// //           value={form.product}
// //           onChange={(e) =>
// //             setForm({ ...form, product: e.target.value })
// //           }
// //           className="border p-3 rounded-xl"
// //         />

// //         <select
// //           value={form.type}
// //           onChange={(e) =>
// //             setForm({ ...form, type: e.target.value })
// //           }
// //           className="border p-3 rounded-xl"
// //         >
// //           <option>IN</option>
// //           <option>OUT</option>
// //         </select>

// //         <input
// //           placeholder="Quantity"
// //           value={form.qty}
// //           onChange={(e) =>
// //             setForm({ ...form, qty: e.target.value })
// //           }
// //           className="border p-3 rounded-xl"
// //         />

// //         <input
// //           placeholder="Note"
// //           value={form.note}
// //           onChange={(e) =>
// //             setForm({ ...form, note: e.target.value })
// //           }
// //           className="border p-3 rounded-xl"
// //         />
// //       </div>

// //       {/* Button */}
// //       <button
// //         onClick={addTxn}
// //         type="button" class="btn btn-primary"
// //       >
// //         Add Transaction
// //       </button>

// //       {/* Table */}
// //       <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
// //         <table className="w-full">

// //           <thead>
// //             <tr className="border-b text-left">
// //               <th className="p-3">Date</th>
// //               <th className="p-3">Product</th>
// //               <th className="p-3">Type</th>
// //               <th className="p-3">Qty</th>
// //               <th className="p-3">Note</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {transactions.map((item, index) => (
// //               <tr key={index} className="border-b">
// //                 <td className="p-3">{item.date}</td>
// //                 <td className="p-3">{item.product}</td>
// //                 <td className="p-3">{item.type}</td>
// //                 <td className="p-3">{item.qty}</td>
// //                 <td className="p-3">{item.note}</td>
// //               </tr>
// //             ))}
// //           </tbody>

// //         </table>
// //       </div>

// //     </div>
// //   );
// // }

// // export default Transactions;
// import React, { useState } from "react";


// function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   const [form, setForm] = useState({
//     product: "",
//     type: "IN",
//     qty: "",
//     note: ""
//   });

//   const addTxn = () => {
//     if (!form.product || !form.qty) {
//       alert("Please fill Product and Quantity");
//       return;
//     }

//     const newTransaction = {
//       product: form.product,
//       type: form.type,
//       qty: form.qty,
//       note: form.note,
//       date: new Date().toLocaleString()
//     };

//     setTransactions([...transactions, newTransaction]);

//     setForm({
//       product: "",
//       type: "IN",
//       qty: "",
//       note: ""
//     });
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-green-700 mb-6">
//         Transactions
//       </h1>

//       {/* Form */}
//       <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

//         <input
//           type="text"
//           placeholder="Product Name"
//           value={form.product}
//           onChange={(e) =>
//             setForm({ ...form, product: e.target.value })
//           }
//           className="border p-3 rounded-lg"
//         />

//         <select
//           value={form.type}
//           onChange={(e) =>
//             setForm({ ...form, type: e.target.value })
//           }
//           className="border p-3 rounded-lg"
//         >
//           <option value="IN">IN</option>
//           <option value="OUT">OUT</option>
//         </select>

//         <input
//           type="number"
//           placeholder="Quantity"
//           value={form.qty}
//           onChange={(e) =>
//             setForm({ ...form, qty: e.target.value })
//           }
//           className="border p-3 rounded-lg"
//         />

//         <input
//           type="text"
//           placeholder="Note"
//           value={form.note}
//           onChange={(e) =>
//             setForm({ ...form, note: e.target.value })
//           }
//           className="border p-3 rounded-lg"
//         />
//       </div>

//       {/* Button */}
//       <button
//         onClick={addTxn}
//         type="button" class="btn btn-primary"
//       >
//         Add Transaction
//       </button>

//       {/* Table */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b">
//               <th className="p-3">Date</th>
//               <th className="p-3">Product</th>
//               <th className="p-3">Type</th>
//               <th className="p-3">Qty</th>
//               <th className="p-3">Note</th>
//             </tr>
//           </thead>

//           <tbody>
//             {transactions.map((item, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-3">{item.date}</td>
//                 <td className="p-3">{item.product}</td>
//                 <td className="p-3">{item.type}</td>
//                 <td className="p-3">{item.qty}</td>
//                 <td className="p-3">{item.note}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Transactions;
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    product: "",
    type: "IN",
    qty: "",
    note: ""
  });

  const addTxn = () => {
    if (!form.product || !form.qty) return;

    const newTxn = {
      product: form.product,
      type: form.type,
      qty: form.qty,
      note: form.note,
      date: new Date().toLocaleString()
    };

    setTransactions((prev) => [...prev, newTxn]);

    setForm({
      product: "",
      type: "IN",
      qty: "",
      note: ""
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Transactions
          </h1>

          <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <input
              type="text"
              placeholder="Product Name"
              value={form.product}
              onChange={(e) =>
                setForm({ ...form, product: e.target.value })
              }
              className="border p-3 rounded-lg"
            />

            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
              className="border p-3 rounded-lg"
            >
              <option value="IN">IN</option>
              <option value="OUT">OUT</option>
            </select>

            <input
              type="number"
              placeholder="Quantity"
              value={form.qty}
              onChange={(e) =>
                setForm({ ...form, qty: e.target.value })
              }
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Note"
              value={form.note}
              onChange={(e) =>
                setForm({ ...form, note: e.target.value })
              }
              className="border p-3 rounded-lg"
            />
          </div>

          <button
            onClick={addTxn}
            type="button" class="btn btn-primary"
          >
            Add Transaction
          </button>

          <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-3">Date</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Note</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{item.date}</td>
                    <td className="p-3">{item.product}</td>
                    <td className="p-3">{item.type}</td>
                    <td className="p-3">{item.qty}</td>
                    <td className="p-3">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Transactions;