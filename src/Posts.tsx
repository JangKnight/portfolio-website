import axios from "axios";
import { use, useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState(null);

  axios({
    method: "get",
    url: "https://ajk-backend.onrender.com",
    responseType: "json",
  }).then(function (response) {
    let data = response.data;
    setData(data);
  });

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 pt-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Posts</h2>
        <p className="text-lg text-center max-w-2xl">Loading posts...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Posts</h2>
      {data.map((post) => (
        <div
          key={post.id}
          className="max-w-4xl h-75 overflow-y-auto w-full bg-gray-100 border-4 border-purple-700 rounded-lg p-6"
        >
          <h3 className="text-xl text-gray-800 font-bold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
