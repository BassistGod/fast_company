import { isSymbol, noConflict } from "lodash";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import Pagination from "../components/pagination";
import api from "../api";
import PropTypes from "prop-types";
import GroupList from "../components/groupList";
import SearchStatus from "../components/searchStatus";
import UsersTable from "../components/usersTable";

const Users = () => {
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
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

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
    setCurrentPage(1);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter((user) => user.profession._id === selectedProf._id)
      : users;

    const count = filteredUsers.length;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    const pageSize = 8;
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
      setSelectedProf();
    };

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              items={professions}
              onItemSelect={handleProfessionSelect}
              selectedItem={selectedProf}
              valueProperty="_id"
              contentProperty="name"
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          {count > 0 && (
            <UsersTable
              users={usersCrop}
              onDelete={handleUserDelete}
              onToggleBookmark={handleToggleBookmark}
              onSort={handleSort}
              selectedSort={sortBy}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
  return "loading";
};

Users.propTypes = {};

export default Users;
