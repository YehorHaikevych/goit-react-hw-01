import React from "react";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.FrListItem}>
      <div>
        <img src={avatar} alt={`${name}'s avatar`} width="50" />
        <p className={styles.textName}>{name}</p>
        <p className={isOnline ? styles.online : styles.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
