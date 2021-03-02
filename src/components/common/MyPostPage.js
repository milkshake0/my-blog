import React from "react";
import Profile from "../Profile";
import ArticleCategory from "./ArticleCategory";
import PostContent from "../PostContent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutContent from "../AboutContent";
import Todo from "../Todo";
const MyPostPage = () => {
  return (
    <div className="MyPostPage">
      <BrowserRouter>
        <Profile />
        {/* Switch사용해야 감지되는 이유? 진짜 뭐지ㅠㅠ */}
        <Switch>
          <ArticleCategory />
        </Switch>
        <Switch>
          <Route exact path="/" component={PostContent} />
          <Route path="/about" component={AboutContent} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MyPostPage;
