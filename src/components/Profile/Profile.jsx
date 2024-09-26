import React from "react";
import Styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.conteiner}>
        <div className={Styles.content}>
          <img className={Styles.imge} src={image} alt="User avatar" />
          <p>{name}</p>
          <p>{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={Styles.items}>
          <li className={Styles.list}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={Styles.list}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={Styles.list}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
