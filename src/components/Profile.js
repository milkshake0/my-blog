import React from "react";

const Profile = () => {
  return (
    <div className="Profile">
      <a href="#" className="image" rel="noopener noreferrer">
        <img
          src="http://eifow.cafe24.com/reactpractice1/img/thumb.png"
          alt="프로필 이미지"
        />
      </a>
      <div className="text">
        <p className="text-name">Username</p>
        <p className="text-desc">DescriptionDescriptionDescription</p>
      </div>
    </div>
  );
};

export default Profile;
