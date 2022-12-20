import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
  let classes = "bi ";
  classes += status ? "bi-bookmark-heart-fill" : "bi-bookmark";
  return (
    <button {...rest}>
      <i className={classes}></i>
    </button>
  );
};

Bookmark.propTypes = {
  status: PropTypes.bool,
};

export default Bookmark;
