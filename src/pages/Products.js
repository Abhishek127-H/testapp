import React, { useState, useContext } from "react";
import Sidebar from "../../src/components/Sidebar";
import Navbar from '../components/Navbar';
import { AppContext } from '../context/AppContext';


function Products() {
  const { products, setProducts } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    code: "",
    name: "",
    category: "",
    price: "",
    qty: ""
  });

  const saveProduct = () => {
    if (!form.name) return;

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }

    setForm({
      code: "",
      name: "",
      category: "",
      price: "",
      qty: ""
    });
  };

  const editProduct = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const exportCSV = () => {
    const header = "Code,Name,Category,Price,Qty\n";

    const rows = products.map((item) =>
      `${item.code},${item.name},${item.category},${item.price},${item.qty}`
    ).join("\n");

    const blob = new Blob([header + rows], {
      type: "text/csv"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();
  };

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.code.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">

      <Sidebar />
      <Navbar />

      <div className="ml-64 p-8">

        <h1 className="text-3xl font-bold mb-6 text-purple-700">
          Product Management
        </h1>

        <div className="flex gap-4 mb-6">

          <input
            placeholder="Search product..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <button type="button" class="btn btn-primary"
            onClick={exportCSV}
            
          >
            Export CSV
          </button>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 grid grid-cols-5 gap-4">

          <input placeholder="Code" value={form.code}
          onChange={(e)=>setForm({...form,code:e.target.value})}
          className="border p-3 rounded-xl" />

          <input placeholder="Product Name" value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
          className="border p-3 rounded-xl" />

          <input placeholder="Category" value={form.category}
          onChange={(e)=>setForm({...form,category:e.target.value})}
          className="border p-3 rounded-xl" />

          <input placeholder="Price" value={form.price}
          onChange={(e)=>setForm({...form,price:e.target.value})}
          className="border p-3 rounded-xl" />

          <input placeholder="Qty" value={form.qty}
          onChange={(e)=>setForm({...form,qty:e.target.value})}
          className="border p-3 rounded-xl" />

        </div>

        <button type="button" class="btn btn-primary"
          onClick={saveProduct}
          
        >
          {editIndex !== null ? "Update Product" : "Add Product"}
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-3">Code</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Qty</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item,index)=>(
                <tr key={index} className="border-b">

                  <td className="p-3">{item.code}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.price}</td>
                  <td className="p-3">{item.qty}</td>

                  <td className="p-3 space-x-2">

                    <button type="button" class="btn btn-primary"
                      onClick={()=>editProduct(index)}
                      
                    >
                      Edit
                    </button>

                    <button type="button" class="btn btn-primary"
                      onClick={()=>deleteProduct(index)}
                      
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Products;