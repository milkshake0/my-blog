import React, { useState } from "react";
import PostCategory from "./PostCategory";
import PostList from "./PostList";
import qs from "qs";

const PostContent = ({ match }) => {
  // const history = useHistory();
  const [category, setCategory] = useState("all");

  console.log("PostContent ", category);
  // const query = location.pathname.split("/")[1];
  console.log("match ", match);
  const query = match.params.category || "all";
  console.log("aaaa ", query);

  const onSelect = (c) => {
    console.log("PostContent-onSelect (parameter) ", c);
    // history.push({
    //   pathname: "/",
    //   search: "?category=" + c,
    // });
    setCategory(c);
    // console.log("PostContent-onSelect (category) ", category);
  };
  return (
    <div className="PostContent">
      <div className="boxWidth800">
        <PostCategory onSelect={onSelect} category={query} />
      </div>
      <PostList category={query} />
    </div>
  );
};

export default PostContent;
