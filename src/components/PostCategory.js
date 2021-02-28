import React from "react";

const PostCategory = () => {
  return (
    <div className="PostCategory">
      <div className="todoList">To do list</div>
      <p className="category-title">카테고리</p>
      <ul className="category-list">
        <li className="active">전체보기</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
};

export default PostCategory;
