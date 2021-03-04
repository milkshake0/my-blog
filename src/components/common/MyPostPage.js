import React from "react";
import Profile from "../Profile";
import ArticleCategory from "./ArticleCategory";
import PostContent from "../PostContent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutContent from "../AboutContent";
import Todo from "../todo/Todo";
import View from "../detail/View";

const MyPostPage = () => {
  return (
    <div className="MyPostPage">
      <BrowserRouter>
        <Profile />
        <ArticleCategory />
        {/* <Switch>
        </Switch> */}
        <Switch>
          <Route exact path="/" component={PostContent} />
          <Route path="/about" component={AboutContent} />
          <Route path="/todo" component={Todo} />
          <Route path="/detail/:id?" component={View} />
          <Route path="/:category?" component={PostContent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MyPostPage;
