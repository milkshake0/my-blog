import React, { useState } from "react";
import PostCategory from "./PostCategory";
import PostList from "./PostList";
import qs from "qs";

const PostContent = ({ location }) => {
  // const history = useHistory();
  const [category, setCategory] = useState("all");

  //임시 작성
  console.log("PostContent location", location);
  console.log("PostContent ", category);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  // console.log("PostContent-query.category ", query.category);

  const onSelect = (c) => {
    console.log("PostContent-onSelect (parameter) ", c);
    // history.push({
    //   pathname: "/",
    //   search: "?category=" + c,
    // });
    setCategory(c);
    // console.log("PostContent-onSelect (category) ", category);
  };
  console.log(location);
  return (
    <div className="PostContent">
      <div className="boxWidth800">
        <PostCategory
          qstring={query.category}
          onSelect={onSelect}
          location={location}
        />
      </div>
      <PostList qstring={query.category} category={category} />
    </div>
  );
};

export default PostContent;
