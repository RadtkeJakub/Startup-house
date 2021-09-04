import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import capitalize from "../helpers/capitalize";
import PostsProvider from "./PostsProvider";

function Breadcrumbs() {
  const location = useLocation();
  const posts = useContext(PostsProvider);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const postRoute = useRouteMatch("/posts/:id");

  useEffect(() => {
    console.log(postRoute);
    if (!location?.pathname) return;
    let arr = [];

    arr = location.pathname.split("/");
    const breadcrumbsArr = [];
    let path = "";
    arr.shift();
    arr.forEach((crumb) => {
      path += `/${crumb}`;
      const name = renamePostId(crumb, path);
      console.log(name);
      breadcrumbsArr.push({
        name,
        path,
      });
    });

    setBreadcrumbs(breadcrumbsArr);
  }, [location]);

  function renamePostId(crumb, path) {
    console.log(postRoute?.url !== path, !posts, !postRoute?.isExact);
    if (!postRoute?.isExact || postRoute?.url !== path || !posts) return crumb;
    const postTitle = posts.filter(
      (post) => post.id === postRoute?.params?.id
    )[0].title;
    console.log("post title", postTitle);
    return postTitle;
  }

  return (
    <BreadcrumbsStyle>
      {breadcrumbs.map((crumb, i) => {
        if (i !== breadcrumbs.length - 1)
          return (
            <div className="link" key={crumb.path}>
              <Link to={crumb.path}>{capitalize(crumb.name)}</Link>
              <div className="icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          );
        return (
          <div className="active" key={crumb.path}>
            {capitalize(crumb.name)}
          </div>
        );
      })}
    </BreadcrumbsStyle>
  );
}

export default Breadcrumbs;

const BreadcrumbsStyle = styled.div`
  display: flex;
  padding: 2rem;
  border: 2px solid black;
  margin-bottom: 2rem;
  align-items: center;

  .link {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 6px;
    }

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
    }

    .icon {
      font-weight: 300;
      font-size: 8px;
    }
  }

  .active {
    color: rgba(0, 0, 0, 0.6);
  }
`;
