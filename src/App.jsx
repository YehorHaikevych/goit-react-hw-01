import Profile from "./components/Profile/Profile";
import FriendList from "./components/Frind/FriendList";
import userData from "./components/Profile/userData.json";
import friends from "./components/Frind/Friends.json";
import transactions from "./components/TransactionHistory/TransactionHistory.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
