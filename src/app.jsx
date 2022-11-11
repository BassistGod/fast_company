import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleUserDelete = (Userid) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== Userid));
  };
  const handleToggleBookMark = (id) => {};
  return (
    <div className="container">
      <SearchStatus length={users.length} />
      <Users onDelete={handleUserDelete} users={users} />
    </div>
  );
}

export default App;
