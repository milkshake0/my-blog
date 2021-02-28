import React from "react";

const PostItem = ({ post }) => {
  const postDate = new Date(post.postedAt);
  const formattedPostDate = `${postDate.getFullYear()}년 ${
    postDate.getMonth() + 1
  }월 ${postDate.getDate()}일`;
  return (
    <div className="PostItem">
      <img
        src={post.thumbUrl}
        alt="포스트 미리보기 이미지"
        className="post-thumb"
      />
      <p className="post-title">{post.title}</p>
      <p className="post-desc">{post.description}</p>
      <p className="post-date">{formattedPostDate}</p>
    </div>
  );
};

export default PostItem;
