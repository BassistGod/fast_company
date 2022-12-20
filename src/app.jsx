import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleUserDelete = (Userid) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== Userid));
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };
  return (
    <div className="container">
      <Users
        users={users}
        onDelete={handleUserDelete}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
}

export default App;
