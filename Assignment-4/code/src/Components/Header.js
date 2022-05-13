import React from "react";

export default function Header(props) {
  return (
    <div className="header">
        <div className="logo">
            <img src={require("./images/logoInsta.png")} alt="logo" />
        </div>
      <h1>InstaClone</h1>
      <div className="image-container">
        <img src={require("./images/img.jpg")} alt="avatar" />
      </div>
    </div>

  );
}
