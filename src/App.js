import styled, { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Breadcrumbs from "./components/Breadcrumbs";
import PostsProvider from "./components/PostsProvider";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppStyle>
        <PostsProvider>
          <Breadcrumbs />
          <Switch>
            <Route exact path="/posts">
              <PostList />
            </Route>
            <Route exact path="/posts/:id">
              <PostDetails />
            </Route>

            <Route path="*">
              <Redirect to="/posts" />
            </Route>
          </Switch>
        </PostsProvider>
      </AppStyle>
    </Router>
  );
}
const AppStyle = styled.div``;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 16px;
  }
`;
export default App;
