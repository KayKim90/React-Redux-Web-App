import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ id, name, checked, onChange, optionLabels }) => {

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        />
        {id ? (
          <label className="toggle-switch-label" htmlFor={id}>
            <span
              className="toggle-switch-inner"
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
            />
            <span
              className="toggle-switch-switch"
            />
          </label>
        ) : null}
      </div>
    );
}

// Set optionLabels for rendering.
Toggle.defaultProps = {
  optionLabels: ["Yes", "No"],
};

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
};

export default Toggle;