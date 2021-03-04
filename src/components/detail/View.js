import React, { useState, useEffect } from "react";
import axios from "axios";

const View = ({ match }) => {
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);

  const postId = match.params.id;
  console.log("id ", postId);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        axios
          .get(`http://localhost:4000/detailPost/${postId}`)
          .then((response) => setDetail(response.data));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPost();
  }, []);

  if (loading) {
    return <div>대기 중...</div>;
  }
  return <div>{detail ? detail.content : ""}</div>;
};

export default View;
