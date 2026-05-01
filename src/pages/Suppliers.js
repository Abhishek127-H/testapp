import React, { useState, useContext } from "react";
import Sidebar from "../../src/components/Sidebar";
import Navbar from '../components/Navbar';
import { AppContext } from '../context/AppContext';


function Suppliers() {
  const { suppliers, setSuppliers } = useContext(AppContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const addSupplier = () => {
    if (!form.name) return;

    setSuppliers([...suppliers, form]);

    setForm({
      name: "",
      phone: "",
      email: ""
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <Sidebar />
      <Navbar />

      <div className="ml-64 p-8">

        <h1 className="text-3xl font-bold mb-6 text-pink-700">
          Supplier Management
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 grid grid-cols-3 gap-4">

          <input
            placeholder="Supplier Name"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            className="border p-3 rounded-xl"
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e)=>setForm({...form,phone:e.target.value})}
            className="border p-3 rounded-xl"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
            className="border p-3 rounded-xl"
          />

        </div>

        <button type="button" class="btn btn-primary"
          onClick={addSupplier}
          
        >
          Add Supplier
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <table className="w-full">

            <thead>
              <tr className="text-left border-b">
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((item,index)=>(
                <tr key={index} className="border-b">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.email}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Suppliers;