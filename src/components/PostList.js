import axios from "axios";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      try {
        axios
          .get("http://localhost:4000/all")
          .then((response) => setPosts(response.data));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

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
