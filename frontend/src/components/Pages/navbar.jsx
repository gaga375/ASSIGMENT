import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "New Post", path: "/newpost" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
  ];

  const handleNavClick = (item) => {
    setActive(item.name);
    navigate(item.path);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="text-purple-400 text-2xl font-bold">🌊</div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === item.name
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 pl-10 pr-4 py-2 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Avatar */}
        <Link  style={{textDecoration:'none'}} to={'/profile'}>
        <div className="w-8 h-8 text-2xl rounded-full">G</div>
        </Link>
      </div>
    </nav>
  );
}
