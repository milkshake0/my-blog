import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const postDate = new Date(post.postedAt);
  const formattedPostDate = `${postDate.getFullYear()}년 ${
    postDate.getMonth() + 1
  }월 ${postDate.getDate()}일`;
  return (
    <div className="PostItem">
      <Link to={`/detail/${post.id}`}>
        <img
          src={post.thumbUrl}
          alt="포스트 미리보기 이미지"
          className="post-thumb"
        />
      </Link>
      <a href={post.url} className="text post-title" rel="noopener noreferrer">
        {post.title}
      </a>
      <p className="text post-desc">{post.description}</p>
      <p className="text post-date">{formattedPostDate}</p>
    </div>
  );
};

export default PostItem;
