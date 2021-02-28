import React from "react";
import PostCategory from "./PostCategory";
import PostList from "./PostList";

const PostContent = () => {
  return (
    <div className="PostContent">
      <div className="boxWidth800">
        <PostCategory />
      </div>
      <PostList />
    </div>
  );
};

export default PostContent;
