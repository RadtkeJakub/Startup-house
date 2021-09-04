import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import useComments from "../hooks/useComments";
import { PostsContext } from "../components/PostsProvider";
import { TitleStyle, TextStyle } from "../components/Post";
import Comment from "../components/Comment";
import capitalize from "../helpers/capitalize";

function PostDetails() {
  const { id } = useParams();
  const posts = useContext(PostsContext);
  const comments = useComments(id);
  const [post, setPost] = useState({});

  console.log("comments", comments);
  useEffect(() => {
    if (!posts) return;
    const postArr = posts.filter((post) => `${post.id}` === id);

    if (postArr.length < 1) {
      setPost(false);
      return;
    }

    setPost(postArr[0]);
  }, [id, posts]);
  return (
    <PostDetailsStyle>
      <TitleStyle>{capitalize(post.title)}</TitleStyle>
      <TextStyle>{capitalize(post.body)}</TextStyle>
      <div className="comments">
        <div className="comments__title">Comments</div>
        <div className="comments__container">
          {comments.length !== 0 ? (
            comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))
          ) : (
            <div className="icon">
              <FontAwesomeIcon icon={faSpinner} pulse />
            </div>
          )}
        </div>
      </div>
    </PostDetailsStyle>
  );
}

export default PostDetails;

const PostDetailsStyle = styled.div`
  padding: 3rem;
  max-width: 80rem;

  .comments {
    margin-top: 10rem;

    &__title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    &__text {
      margin-left: 2rem;
    }

    &__container {
      display: flex;
      flex-direction: column;

      .icon {
        font-size: 6rem;
        margin: 10rem auto;
      }

      & > * {
        margin-bottom: 4rem;
      }
    }
  }
`;
