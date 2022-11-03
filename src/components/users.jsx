import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleUserDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const renderQualities = (qualities) => {
    return qualities.map((quality) => (
      <span key={quality._id} className={"badge m-1 bg-" + quality.color}>
        {quality.name}
      </span>
    ));
  };

  const contentHeader = () => {
    let result = "";
    if (users.length > 4 || users.length === 1) {
      result = users.length + " человек тусанет с тобой сегодня";
    } else if (users.length > 1 && users.length < 5) {
      result = users.length + " человека тусанет с тобой сегодня";
    } else {
      result = "Никто с тобой сегодня не тусанет";
    }
    return result;
  };

  return (
    <div className="container">
      <h2 className="text-center">
        <span
          className={
            "badge mt-3 mb-2 bg-" + (users.length > 0 ? "primary" : "danger")
          }
        >
          {contentHeader()}
        </span>
      </h2>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>{renderQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleUserDelete(user._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
