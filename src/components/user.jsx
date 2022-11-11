import React from "react";
import RenderQualities from "./renderQualities";

const User = ({ users, onDelete }) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user._id}>
          <th scope="row">{user.name}</th>
          <td>
            <RenderQualities qualities={user.qualities} />
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(user._id)}
            >
              Удалить
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default User;
