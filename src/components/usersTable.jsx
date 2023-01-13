import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import UsersTableHeader from "./usersTableHeader";

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {},
  };

  return (
    <table className="table">
      <UsersTableHeader {...{ onSort, selectedSort, columns }} />
      <tbody>
        {users.map((user) => (
          <User key={user._id} user={user} {...rest} />
        ))}
      </tbody>
    </table>
  );
};

UsersTable.protoTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
};

export default UsersTable;
