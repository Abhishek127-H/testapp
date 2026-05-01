// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { signupUser } from "../../src/services/auth";

// // function Signup() {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     password: ""
// //   });

// //   const signup = () => {
// //     if (!form.name || !form.email || !form.password) {
// //       alert("Fill all fields");
// //       return;
// //     }

// //     const result = signupUser(form);

// //     if (result.success) {
// //       alert("Signup Successful");
// //       navigate("/");
// //     } else {
// //       alert(result.message);
// //     }
// //   };

// //   return (
// //     <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center">

// //       <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-96">

// //         <h1 className="text-4xl font-bold text-center text-pink-600 mb-6"><center>
// //           Create Account</center>
// //         </h1>
// // <center>
// //         <input
// //           placeholder="Full Name"
// //           className="w-full p-3 border rounded mb-4"
// //           value={form.name}
// //           onChange={(e)=>setForm({...form,name:e.target.value})}
// //         />
// // <br></br>
// //         <input
// //           placeholder="Email"
// //           className="w-full p-3 border rounded mb-4"
// //           value={form.email}
// //           onChange={(e)=>setForm({...form,email:e.target.value})}
// //         />
// // <br></br>
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full p-3 border rounded mb-4"
// //           value={form.password}
// //           onChange={(e)=>setForm({...form,password:e.target.value})}
// //         />
// // <br></br>
// //         <button type="button" class="btn btn-primary"
// //           onClick={signup}
          
// //         >
// //           Signup
// //         </button>
// // <br></br>
// //         <p
// //           onClick={()=>navigate("/")}
        
// //         >
// //           Already have account? Login
// //         </p>
// // </center>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(form));

//     alert("Signup Successful");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
//         <h1 className="text-3xl font-bold text-center mb-6 text-black">
//           Sign Up
//         </h1>

//         <form onSubmit={handleSignup} className="space-y-4">

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="w-full border p-3 rounded-lg"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="w-full border p-3 rounded-lg"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={(e) =>
//               setForm({ ...form, password: e.target.value })
//             }
//             className="w-full border p-3 rounded-lg"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
//           >
//             Sign Up
//           </button>

//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           Already have account?{" "}
//           <Link to="/" className="text-blue-600 font-bold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup Successful");
    navigate("/");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Sign Up
        </h1>
<center>
        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <pre>
             

          </pre>
          <br></br>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <pre>


          </pre>
          
          <br></br>

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <pre>


          </pre>
<br></br>
          <button
            type="submit"
             type="button" class="btn btn-primary"
          >
            Sign Up
          </button>
<pre>


</pre>

<br></br>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have account?{" "}
          <Link to="/" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
        </center>

      </div>

    </div>
  );
}

export default Signup;