import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../api";
import RenderQualities from "../components/renderQualities";

const UserPage = () => {
  const [user, setUser] = useState();
  const params = useParams();
  const history = useHistory();
  const { userId } = params;

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  const handleBackToUsers = () => {
    history.push("/users");
  };

  if (user) {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Параметры</th>
              <th scope="col">Личные данные</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Имя</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th scope="row">Качества</th>
              <td>
                <RenderQualities qualities={user.qualities} />
              </td>
            </tr>

            <tr>
              <th scope="row">Профессия</th>
              <td>{user.profession.name}</td>
            </tr>
            <tr>
              <th scope="row">Встретился, раз</th>
              <td>{user.completedMeetings}</td>
            </tr>
            <tr>
              <th scope="row">Оценка</th>
              <td>{user.rate}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleBackToUsers();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  }
  return "loading";
};

export default UserPage;
