// // // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Login from "./pages/Login";
// // import Dashboard from "./pages/Dashboard";
// // import Products from "./pages/Products";
// // import Suppliers from "./pages/Suppliers";
// // import Transactions from "./pages/Transactions";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/dashboard" element={<Dashboard />} />
// //         <Route path="/products" element={<Products />} />
// //         <Route path="/suppliers" element={<Suppliers />} />
// //         <Route path="/transactions" element={<Transactions />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Products from "./pages/Products";
// import Suppliers from "./pages/Suppliers";
// import Transactions from "./pages/Transactions";
// import LowStock from "./pages/LowStock";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/suppliers" element={<Suppliers />} />
//         <Route path="/transactions" element={<Transactions />} />
//         <Route path="/lowstock" element={<LowStock />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Transactions from "./pages/Transactions";
import LowStock from "./pages/LowStock";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/lowstock" element={<LowStock />} />
      </Routes>
    </Router>
  );
}

export default App;