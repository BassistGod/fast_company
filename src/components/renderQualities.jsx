import React from "react";
import PropTypes from "prop-types";

const RenderQualities = ({ qualities }) => {
  return qualities.map((quality) => (
    <span key={quality._id} className={"badge m-1 bg-" + quality.color}>
      {quality.name}
    </span>
  ));
};

RenderQualities.propTypes = {
  qualities: PropTypes.array,
};

export default RenderQualities;
