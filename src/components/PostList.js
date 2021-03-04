import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCategory from "./PostCategory";
import PostItem from "./PostItem";

const PostList = ({ category }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // console.log("category: ", category, "qstring: ", qstring);
    const query = category !== "all" ? `posts-${category}` : "all";
    const fetchPosts = () => {
      setLoading(true);
      try {
        axios.get(`http://localhost:4000/${query}`).then((response) => {
          console.log("PostList ", category);
          setPosts(response.data);
          console.log("PostList ", posts);
        });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [category]);

  if (loading) {
    return <div>대기 중...</div>;
  }
  if (!posts) {
    return null;
  }
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
