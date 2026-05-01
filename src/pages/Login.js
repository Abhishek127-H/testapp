import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../src/services/auth";
//import './login.css';
import './index.css';

<link a href="\service\Style.css"></link>

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const login = () => {
    if (!form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    const result = loginUser(
      form.email,
      form.password
    );

    if (result.success) {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-96">

        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6"><center>
INVENTORY PRO
        </center>
       
        </h1>
<center>
        <input
        size={70}
        
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />
        <br></br>

        <input
        size={70}
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          value={form.password}
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />
        <br></br>

        <button type="button" class="btn btn-primary"
          onClick={login}
        
        >
          
          Login
        </button>
        

        <p
          onClick={()=>navigate("/signup")}
          className="text-center mt-4 text-sm cursor-pointer text-blue-600"
        >
          New User? Signup
        </p>
        </center>

      </div>
    </div>
  );
}


export default Login;
