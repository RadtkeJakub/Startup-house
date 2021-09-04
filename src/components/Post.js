import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import capitalize from "../helpers/capitalize";

function Post({ post }) {
  return (
    <PostStyle>
      <TitleStyle>{capitalize(post.title)}</TitleStyle>
      <TextStyle>{capitalize(post.body)}</TextStyle>
      <Link className="button" to={`/posts/${post.id}`}>
        Full Version
      </Link>
    </PostStyle>
  );
}

export default Post;

const PostStyle = styled.div`
  border: 2px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  width: 100%;

  .button {
    align-self: flex-end;
    text-decoration: none;
    color: inherit;
    border: 2px solid black;
    padding: 6px 12px;
    border-radius: 6px;
    font-weight: 600;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-4px);
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const TitleStyle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const TextStyle = styled.div`
  margin-bottom: 12px;
  font-size: 1.6rem;
`;
