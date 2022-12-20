import React from "react";
import RenderQualities from "./renderQualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onToggleBookmark }) => {
  return (
    <>
      <tr>
        <th scope="row">{user.name}</th>
        <td>
          <RenderQualities qualities={user.qualities} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          {
            <Bookmark
              status={user.bookmark}
              onClick={() => onToggleBookmark(user._id)}
            />
          }
        </td>
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
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
};

export default User;
