import React, { useState, useEffect } from "react";
import axios from "axios";

function usePosts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return posts;
}

export default usePosts;
