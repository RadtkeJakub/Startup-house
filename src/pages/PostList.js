import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { PostsContext } from "../components/PostsProvider";
import Post from "../components/Post";

function PostList(props) {
  const posts = useContext(PostsContext);

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
