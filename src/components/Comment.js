import React from "react";
import styled from "styled-components";

import capitalize from "../helpers/capitalize";

function Comment({ comment }) {
  return (
    <CommentStyle>
      <div className="title">{capitalize(comment.name)}</div>
      <div className="text">{capitalize(comment.body)}</div>
    </CommentStyle>
  );
}

export default Comment;

const CommentStyle = styled.div`
  .title {
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;
