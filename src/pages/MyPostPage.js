import React from "react";
import Profile from "../components/Profile";
import ArticleCategory from "../components/ArticleCategory";
import PostContent from "../components/PostContent";

const MyPostPage = () => {
  return (
    <div className="MyPostPage">
      <Profile />
      <ArticleCategory />
      <PostContent />
    </div>
  );
};

export default MyPostPage;
