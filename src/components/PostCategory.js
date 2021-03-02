import React from "react";
import { NavLink } from "react-router-dom";

const postCategories = [
  { name: "all", text: "전체보기" },
  { name: "html", text: "HTML" },
  { name: "css", text: "CSS" },
  { name: "scss", text: "SCSS" },
  { name: "javascript", text: "Javascript" },
  { name: "react", text: "React" },
  { name: "nodejs", text: "Node.js" },
];

const PostCategory = ({ onSelect, qstring }) => {
  console.log("qstring: ", qstring);
  return (
    <div className="PostCategory">
      <NavLink className="todoList" to="/todo">
        To do list
      </NavLink>
      <p className="category-title">카테고리</p>
      <ul className="category-list">
        {postCategories.map((c) => (
          <li
            className={c.name === (!qstring ? "all" : qstring) ? "active" : ""}
            key={c.name}
            onClick={() => onSelect(c.name)}
          >
            <NavLink to={c.name === "all" ? "/" : `?category=${c.name}`}>
              {c.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCategory;
