import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";
import RenderQualities from "./renderQualities";
import { Link } from "react-router-dom";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookmark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>,
    },
    qualities: {
      name: "Качества",
      component: (user) => <RenderQualities qualities={user.qualities} />,
    },
    profession: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
          status={user.bookmark}
          onClick={() => onToggleBookmark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(user._id)}
        >
          Удалить
        </button>
      ),
    },
  };

  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody data={users} columns={columns} />
    </table>
  );
};

UsersTable.protoTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UsersTable;
