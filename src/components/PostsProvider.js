import React from "react";

import usePosts from "../hooks/usePosts";

export const PostsContext = React.createContext();

function PostsProvider({ children }) {
  const posts = usePosts();
  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
}

export default PostsProvider;
