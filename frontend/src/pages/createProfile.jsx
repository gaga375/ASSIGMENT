import { useState } from "react";
 import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    location: "",
    skills: "",
    gitlink: "",
    linkdin: "",
    websitelink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
   const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
console.log("submit workng")
let data = await axios.post("https://assigment-v3sb.onrender.com/profile", {profile}, config);
if(! data.data.success){
navigate('/')
}
  
    
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong ");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Your Profile 👤</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="John Doe"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio *</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="A passionate full-stack developer..."
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
            <input
              name="location"
              value={profile.location}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="Mumbai, India"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skills *</label>
            <input
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="React, Node, MongoDB, Tailwind"
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile</label>
            <input
              name="gitlink"
              value={profile.gitlink}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="https://github.com/yourname"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <input
              name="linkdin"
              value={profile.linkdin}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website / Portfolio</label>
            <input
              name="websitelink"
              value={profile.websitelink}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="https://yourportfolio.com"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
