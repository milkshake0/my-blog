import React from "react";
import { NavLink } from "react-router-dom";

const ArticleCategory = () => {
  // const history = useHistory();
  // useEffect(() => {
  //   console.log(history.location.pathname);
  // }, [history.location.pathname]);
  // const articleCategory = match.params.
  return (
    <div className="ArticleCategory">
      <NavLink className="posts" activeClassName="active" exact to="/">
        글
      </NavLink>
      <NavLink className="about" activeClassName="active" to="/about">
        소개
      </NavLink>
    </div>
  );
};

export default ArticleCategory;
