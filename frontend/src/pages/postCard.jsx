import { useEffect, useState } from "react";
import axios from "axios";

export default function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch all posts from backend
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://assigment-v3sb.onrender.com/allpost");
        setPosts(res.data.data); 
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-screen min-h-screen  gap-4 p-6 bg-gray-100">
      {posts.map((post) => (
        <div
          key={post._id}
          className="max-w-4xl w-full mt-10 ml-60 bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg"
        >
          {/* Header */}
          <div className="flex items-center space-x-4 px-4 py-3">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full text-white font-semibold text-lg">
              {post.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold">{post.projectTitle}</p>
              <p className="text-sm text-gray-400">
                {post.date}
              </p>
            </div>
          </div>

          {/* Image */}
          <img
            src={post.projectImg}
            alt={post.projectTitle}
            className="w-full h-52 object-cover"
          />

          {/* Description */}
          <div className="px-4 py-4">
            <p className="text-sm text-gray-300">{post.description}</p>
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 block"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
