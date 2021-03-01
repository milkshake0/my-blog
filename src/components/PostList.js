import axios from "axios";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ category, qstring }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // console.log("category: ", category, "qstring: ", qstring);
    const query = qstring !== undefined ? `posts-${qstring}` : "all";
    const fetchPosts = () => {
      setLoading(true);
      try {
        axios.get(`http://localhost:4000/${query}`).then((response) => {
          console.log("PostList ", qstring);
          setPosts(response.data);
        });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [qstring]);

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
