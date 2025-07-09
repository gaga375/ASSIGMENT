import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        let data = await axios.post("http://localhost:8080/ifprofile", {}, config);
console.log(data.data.success)
     
if(data.data.success){
 let response = await axios.post('http://localhost:8080/userdatasent', {}, config);
        console.log(response)
        setData(response.data.data);
}
else{
  navigate("/createprofile")
}

       
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-4xl w-full space-y-8">
        {/* Header Section */}
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-purple-600 text-white flex items-center justify-center rounded-full text-3xl font-bold">
            {data.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
            <p className="text-gray-600">{data.location}</p>
          </div>
        </div>

        {/* Bio Section */}
        <div>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">About Me</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {data.bio}
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Skills</h2>
          <p className="text-gray-800">{data.skills}</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Links</h2>
          <div className="space-y-2">
            {data.gitlink && (
              <a
                href={data.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:underline"
              >
                GitHub: {data.gitlink}
              </a>
            )}
            {data.linkdin && (
              <a
                href={data.linkdin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:underline"
              >
                LinkedIn: {data.linkdin}
              </a>
            )}
            {data.websitelink && (
              <a
                href={data.websitelink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:underline"
              >
                Website: {data.websitelink}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
