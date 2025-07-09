import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username:localStorage.getItem("username") ,
    projectTitle: "",
    description: "",
    link: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };
const handleSubmit = async (e) => {
  e.preventDefault();


  if (!imageFile) return alert("Please select an image!");

const form = new FormData();
form.append("username", formData.username);
form.append("projectTitle", formData.projectTitle);
form.append("description", formData.description);
form.append("link", formData.link);
form.append("projectImg", imageFile);

const token = localStorage.getItem("token");

  try {
    setUploading(true);
 
   
   
const res = await axios.post("http://localhost:8080/post", form, {
  headers: {
    Authorization: `Bearer ${token}`,
 
  },
    });

    console.log("Post Created:", res.data);
    alert("Post created successfully!");
    navigate("/");

  } catch (err) {
    console.error("Post failed:", err);
    alert("Something went wrong.");
  } finally {
    setUploading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a New Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
         

          {/* Project Title */}
          <input
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            required
            placeholder="Project Title"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Project Description"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
          ></textarea>

          {/* Project Link */}
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Project Link (optional)"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-700">Project Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {uploading ? "Uploading..." : "Submit Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
