import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        await axios
          .get("http://localhost:4000/user")
          .then((response) => setUser(response.data));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>대기 중...</div>;
  }

  if (!user) {
    return null;
  }
  return (
    <div className="Profile">
      <a href={user.url} className="image" rel="noopener noreferrer">
        <img src={user.thumbUrl} alt="프로필 이미지" />
      </a>
      <div className="text">
        <a href={user.url} className="text-name" rel="noopener noreferrer">
          {user.username}
        </a>
        <p className="text-desc">{user.description}</p>
      </div>
    </div>
  );
};

export default Profile;
