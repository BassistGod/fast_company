import React from "react";

const SearchStatus = ({ length }) => {
  const contentHeader = () => {
    let result = "";
    if (length > 4 || length === 1) {
      result = length + " человек тусанет с тобой сегодня";
    } else if (length > 1 && length < 5) {
      result = length + " человека тусанет с тобой сегодня";
    } else {
      result = "Никто с тобой сегодня не тусанет";
    }
    return result;
  };

  return (
    <h2 className="text-center">
      <span
        className={"badge mt-3 mb-2 bg-" + (length > 0 ? "primary" : "danger")}
      >
        {contentHeader()}
      </span>
    </h2>
  );
};

export default SearchStatus;
