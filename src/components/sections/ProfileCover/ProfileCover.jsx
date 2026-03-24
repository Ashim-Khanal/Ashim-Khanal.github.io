import React from "react";
import cover from "../../../images/Cover.png";

const ProfileCover = () => {
  return (
    <div className="h-full w-full">
      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ProfileCover;
