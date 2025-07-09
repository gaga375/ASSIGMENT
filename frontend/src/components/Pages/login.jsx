import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios  from "axios";
export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
  let responce = await axios.post("https://assigment-v3sb.onrender.com/login",form)
  if(responce){
    localStorage.setItem('token',responce.data.token)
  alert(responce.data.message)



const token = localStorage.getItem('token');

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

let data = await axios.post("https://assigment-v3sb.onrender.com/ifprofile", {}, config);
console.log(data.data.success)
 localStorage.setItem('username',data.data.username)
if(data.data.success){
navigate('/')
}
else{
  navigate('/createprofile')
}

}
else{
  alert("somthing else please try again")
}
    }
  catch (e){
    console.log(e)
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">welcome to gagan Project 👋</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please login to your account and start the adventure
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your username"
            />
          </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-purple-500"
              />
              <span>Remember Me</span>
            </label>
        
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
       
      </div>
    </div>
  );
}
