import React, { useEffect, useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

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
      {users && (
        <Users
          users={users}
          onDelete={handleUserDelete}
          onToggleBookmark={handleToggleBookmark}
        />
      )}
    </div>
  );
}

export default App;
