import React from "react";
import styles from "./FriendList.module.css";

import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
