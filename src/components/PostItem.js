import React from "react";

const PostItem = () => {
  return (
    <div className="PostItem">
      <img
        src="https://via.placeholder.com/1000/333333"
        alt="포스트 미리보기 이미지"
        className="post-thumb"
      />
      <p className="post-title">Title</p>
      <p className="post-desc">Description</p>
      <p className="post-date">2021년 02월 28일</p>
    </div>
  );
};

export default PostItem;
