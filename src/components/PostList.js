import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import usePosts from "../hooks/usePosts";
import Post from "./Post";

function PostList(props) {
  const posts = usePosts();

  return (
    <PostListStyle>
      {posts && posts.map((post) => <Post post={post} key={post.id} />)}
    </PostListStyle>
  );
}

const PostListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 3rem;
  }
`;

export default PostList;
